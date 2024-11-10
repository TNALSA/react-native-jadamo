import { StyleSheet} from 'react-native';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { db } from './firebaseConfig'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

import StartPage from './pages/StartPage';
import ChoosePage from './pages/ChoosePage';
import ProblemPage from './pages/ProblemPage'
import AppContext from './Appcontext';
import { useFonts } from 'expo-font';
import ResultPage from './pages/ResultPage';
import ConfirmPage from './pages/ConfirmPage';

const Stack = createStackNavigator();

export default function App() {
  // Context API 관련 변수 및 함수 ----------
  const [checked, setChecked] = useState(1);
  const [image,setImage] = useState();
  const [data,setData] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [problem,setProblem] = useState();
  const [fontsLoaded] = useFonts({
    Pixel: require("./assets/fonts/DungGeunMo.ttf")
  });

  const setCheckedNumber = (num) => {
    setChecked(num);
  }

  const setIdx = (idx) => {
    setIndex(idx);
  }

  const setImageURL = (value) => {
    setImage(value);
  }

  const setConfirm = (value) => {
    setIsConfirm(value)
  }

  const setQuestionData = (value) =>{
    setData(value);
  }

  const setCountScore = () => {
    console.log("SetCountScore() 호출, 현재 score: "+score)
    setScore(score + 1)
  }

  // firebase 관련 함수 ----------
  const readDocs = async() => {      
    try {
      const data = await getDocs(collection(db,"past_questions"));
      // map 형태로 Docs 데이터 저장
      setProblem(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    } catch (error) {
      console.log(error.message);
    }
  }

  const readDoc = async(name) => {      
    try {
      console.log("[Info]회차: "+name)
      const docRef = doc(db,'past_questions', `${name}`);
      const docSnap = await getDoc(docRef);     

      if(docSnap.exists()){
          const tempArr = [];
          for(let i=1; i<=50; i++){
            console.log("[Info]문제: " + docSnap.get(`${i}`));
            tempArr.push(docSnap.get(`${i}`))
          }
          setQuestionData(tempArr);
      }else{
          console.log("[Warn]No such document!")
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const values = {
    checked: checked,
    index: index,
    image: image,
    isConfirm: isConfirm,
    data: data,
    fontsLoaded: fontsLoaded,
    score: score,
    problem: problem,
    setConfirm,
    setImageURL,
    setIdx,
    setCheckedNumber,
    setQuestionData,
    setCountScore,
    readDocs,
    readDoc
  }

  return (
    <AppContext.Provider value={values}>
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "StartPage" component={ StartPage }/>
            <Stack.Screen name = "ChoosePage" component = {ChoosePage}/>
            <Stack.Screen name = "ProblemPage" component = {ProblemPage}/>
            <Stack.Screen name = "ConfirmPage" component = {ConfirmPage}/>
            <Stack.Screen name = "ResultPage" component = {ResultPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </AppContext.Provider>
  );
}

