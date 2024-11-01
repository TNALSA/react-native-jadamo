import { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { doc, getDoc} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { View , StyleSheet, Text, Button, Image} from "react-native";
import { db } from '../firebaseConfig'
import Item from "../component/Item";
import ConfirmPage from "./ConfirmPage";
import App from "../App";
import AppContext from "../Appcontext";


export default function ProblemPage({route}) {
    const myContext = useContext(AppContext);

    useEffect(() => {
        const readDB = async() => {      
          try {
            console.log("[Info]회차: "+route.params.name)
            const docRef = doc(db,'past_questions', `${route.params.name}`);
            const docSnap = await getDoc(docRef);          

            if(docSnap.exists()){
                const tempArr = [];
                for(let i=1; i<=50; i++){
                  console.log("[Info]문제: " + docSnap.get(`${i}`));
                  tempArr.push(docSnap.get(`${i}`))
                }
                myContext.setQuestionData(tempArr);
            }else{
                console.log("[Warn]No such document!")
            }
          } catch (error) {
            console.log(error.message);
          }
        }
    
        readDB();
      }, []);

      const confirmation = () => {
        myContext.setConfirm(true);
      }

      const handleGetDownloadURL = (idx) => {
        const storage = getStorage();
        const fileRef = ref(storage, `2024년도 기출문제 3회 (2024-08-25)/${idx}.png`);
        try {
            getDownloadURL(fileRef).then((fileURL) => {
              myContext.setImageURL(fileURL);
            });
        } catch (error) {
            console.error("Error getting download URL: ", error);
            myContext.setImageURL(null)
        }

        return(
          <View style={styles.imageView}>
            <Image source={{uri:myContext.image}} style={styles.image} resizeMode="contain"/>
          </View>
        )
    };

      return(
        <View style={styles.container}>   
          {myContext.data.length > 0 && myContext.index < myContext.data.length && (
            <View>
                <Title idx={myContext.index + 1} question={myContext.data[myContext.index].question} />
                {myContext.data[myContext.index].image === true ? handleGetDownloadURL((myContext.index + 1)): null }
                <Item answers = {myContext.data[myContext.index].answers}/>
                <Button title="정답 확인" onPress={confirmation} disabled={myContext.isConfirm}/>
            </View>
          )}

          {/* 정답 확인 시 모달 창 출력 */}
          {myContext.isConfirm ? <ConfirmPage correct = {myContext.data[myContext.index].result}/> : null}
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: 'auto',
    alignItems:'center',
    backgroundColor: '#dcdcdc'
  },
  imageView: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 400,
    height: 400
  }
})