import { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { View , StyleSheet,Button, Image, Modal, Dimensions} from "react-native";
import Item from "../component/Item";
import ConfirmPage from "./ConfirmPage";
import App from "../App";
import AppContext from "../Appcontext";


export default function ProblemPage({route}) {
    const myContext = useContext(AppContext);

    const { width, height } = Dimensions.get('window');

    useEffect(() => {
        myContext.readDoc(route.params.name);
      }, []);

      const confirmation = (value) => {
        myContext.setConfirm(value);
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
            <View style={styles.contentView}>
                <Title idx={myContext.index + 1} question={myContext.data[myContext.index].question} />
                {myContext.data[myContext.index].image === true ? handleGetDownloadURL((myContext.index + 1)): null }
                <Item answers = {myContext.data[myContext.index].answers}/>
                <Button color='#0008f0' title="정답 확인" onPress={() => confirmation(true)} disabled={myContext.isConfirm}/>  
            </View>
          )}

          {/* 정답 확인 시 모달 창 출력 */}
          {myContext.isConfirm ?   
            <View style={{marginTop: 400}}>
              <Modal 
                animationType="slide"
                visible={myContext.isConfirm}
                transparent={true}>
                <ConfirmPage correct = {myContext.data[myContext.index].result} navigation = {route.params.navigation}/> 
              </Modal>
            </View>
          : null}
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    alignItems:'center',
    backgroundColor: '#c9c9c9'
  },
  contentView: {
    width: '100%', // 전체 너비 사용
  },
  imageView: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: Dimensions.get('screen').width * 0.9, // 화면 너비의 90% 비율
    height: Dimensions.get('window').height * 0.4
  },
})