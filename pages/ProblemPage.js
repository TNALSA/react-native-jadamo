import { useEffect } from "react";
import Title from "../component/Title";
import { collection, doc, getDoc } from 'firebase/firestore';
import { View , StyleSheet} from "react-native";
import { db } from '../firebaseConfig'

export default function ProblemPage({route}) {
    useEffect(() => {
        const readDB = async() => {      
          try {
            console.log("[Info]회차: "+route.params.name)
            const docRef = getDoc(collection(db,'past_questions'), route.params.name);
            console.log(docRef.id);

            if(docSnap.exists()){
                console.log("[Info]데이터: " + docSnap.data())
            }else{
                console.log("[Warn]No such document!")
            }
          } catch (error) {
            console.log(error.message);
          }
        }
    
        readDB();
      }, [])

      return(
        <View>
            <Title/>
        </View>
      );
}

const styles = StyleSheet.create
