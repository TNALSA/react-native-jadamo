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
    const [data,setData] = useState([]);
    const [image,setImage] = useState();
    const [isConfirm, setIsConfirm] = useState(false);
    const [index, setIndex] = useState(0);
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
        setImage(null);
        setIsConfirm(false);
      };

      const confirmation = () => {
        setIsConfirm(true);
      }

      const handleGetDownloadURL = (idx) => {
        const storage = getStorage();
        const fileRef = ref(storage, `2024년도 기출문제 3회 (2024-08-25)/${idx}.png`);
        try {
            getDownloadURL(fileRef).then((fileURL) => {
              setImage(fileURL);
            });
        } catch (error) {
            console.error("Error getting download URL: ", error);
            setImage(null)
        }

        return(
          <View style={styles.imageView}>
            <Image source={{uri:image}} style={styles.image} resizeMode="contain"/>
          </View>
        )
    };

      return(
        <View style={styles.container}>   
          {data.length > 0 && index < data.length && (
            <View>
                <Title idx={index + 1} question={data[index].question} />
                {data[index].image === true ? handleGetDownloadURL((index + 1)): null }
                <Item answers = {data[index].answers}/>
                <Button title="정답 확인" onPress={confirmation} disabled={isConfirm}/>
                <Button title="다음" onPress={handleNext} />
            </View>
          )}

          {/* 정답 확인 시 모달 창 출력 */}
          {isConfirm ? <ConfirmPage correct = {data[index].result}/> : null}
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