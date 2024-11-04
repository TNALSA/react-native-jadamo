import { useContext } from "react"
import { View, StyleSheet, Text, Button, Modal } from "react-native"
import AppContext from "../Appcontext"


export default function ConfirmPage(props, { navigation }){
    const myContext = useContext(AppContext);

    const handleNext = () => {
        if(props.correct === myContext.checked){
            myContext.setCountScore()
        }
        myContext.setIdx(prevIndex => Math.min(prevIndex + 1, myContext.data.length - 1)); // 다음 인덱스 설정
        myContext.setImageURL(null);
        myContext.setConfirm(false);
    };

    return(
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {props.correct === myContext.checked ? 
                <Text style={styles.text}>축하드립니다. 정답입니다!</Text> : <Text style={styles.text}>틀렸습니다. </Text> 
                }
                <Text style={styles.text_result}>내가 선택한 답: {myContext.checked}</Text>
                <Text style={styles.text_result}>정답: {props.correct}</Text>
                
                {/* 
                마지막 문제의 Index는 49. 
                따라서, 데이터의 크기인 50에 맞추기 위해서 현재 INDEX + 1 해줘야 한다.
                마지막 문제일 경우 '결과 확인' 버튼을 통해 시험 결과 페이지로 이동
                */}
                {(myContext.index + 1) === myContext.data.length ? 
                <View style={styles.nextBtnView}>
                    <Button title="결과 확인" color='#0008f0' onPress={() => 
                    {   
                        myContext.setCountScore();
                        navigation.navigate("ResultPage");
                    }}/>
                </View>
                :
                <View style={styles.nextBtnView}>
                    <Button title="다음 문제" color='#0008f0' onPress={handleNext}/>
                </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    confirmView: {
        width:300,
        height:150,
        backgroundColor: '#fced0f',
        justifyContent: 'center', // 수직 중앙 정렬
        alignItems: 'flex-start', // 수평 오른쪽 정렬
        padding: 10 // 여백 추가
    },
    nextBtnView: {
        width: 90,
        marginTop: 20
    },
    text: {
        fontFamily: "Pixel",
        fontSize: 20
    },
    text_result: {
        fontFamily: "Pixel",
        fontSize: 16
    },
    modalView: {
        marginTop: 230,
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        alignContent: "center",
        textAlignVertical: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
})