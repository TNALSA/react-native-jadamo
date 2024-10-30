import { useEffect, useState } from "react";
import Title from "../component/Title";
import { collection, doc, getDoc } from 'firebase/firestore';
import { View , StyleSheet, Text, Button, Image} from "react-native";
import { db } from '../firebaseConfig'
import Item from "../component/Item";


export default function ProblemPage({route}) {
    const [data,setData] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const readDB = async() => {      
          try {
            console.log("[Info]회차: "+route.params.name)
            const docRef = doc(db,'past_questions', `${route.params.name}`);
            const docSnap = await getDoc(docRef);          

            if(docSnap.exists()){
                const tempArr = [];
                for(let i=1; i<=15; i++){
                  console.log("[Info]문제: " + docSnap.get(`${i}`));
                  tempArr.push(docSnap.get(`${i}`))
                }
                setData(tempArr);
            }else{
                console.log("[Warn]No such document!")
            }
          } catch (error) {
            console.log(error.message);
          }
        }
    
        readDB();
      }, []);

      const handleNext = () => {
        setIndex(prevIndex => Math.min(prevIndex + 1, data.length - 1)); // 다음 인덱스 설정
      };

      return(
        <View style={styles.container}>
          {/* {data.map((problem, idx) => (
            <View>
              <Title idx = {idx+1} question = {problem.question} />
              <Item answers = {problem.answers}/>
              <Button title="다음" onPress={handleNext}/>
            </View>
          ))} */}
          {data.length > 0 && index < data.length && (
                <View>
                    <Title idx={index + 1} question={data[index].question} />
                    {data[index].image ? <Image source={require(`../assets/content-images/2024/0825/${(index + 1).png}`)}/> : null }
                    <Item answers={data[index].answers}/>
                    <Button title="다음" onPress={handleNext} />
                </View>
          )}
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: 'auto'
  }
    
})
