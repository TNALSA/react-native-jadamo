import { StyleSheet} from 'react-native';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import StartPage from './pages/StartPage';
import ChoosePage from './pages/ChoosePage';
import ProblemPage from './pages/ProblemPage'
import AppContext from './Appcontext';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  const [checked, setChecked] = useState(1);
  const [image,setImage] = useState();
  const [data,setData] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [index, setIndex] = useState(0);
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

  const values = {
    checked: checked,
    index: index,
    image: image,
    isConfirm: isConfirm,
    data: data,
    fontsLoaded: fontsLoaded,
    setConfirm,
    setImageURL,
    setIdx,
    setCheckedNumber,
    setQuestionData
  }

  return (
    <AppContext.Provider value={values}>
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "StartPage" component={ StartPage }/>
            <Stack.Screen name = "ChoosePage" component = {ChoosePage}/>
            <Stack.Screen name = "ProblemPage" component = {ProblemPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
