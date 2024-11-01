import { useContext } from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import AppContext from "../Appcontext"

export default function ConfirmPage(props){
    const myContext = useContext(AppContext);

    return(
        <View style={styles.confirmView}>
            {props.correct === myContext.checked ? <Text>축하드립니다. 정답입니다!</Text> : <Text>틀렸습니다. </Text> }
            <Text> 내가 고른 답: {myContext.checked}</Text>
            <Text> 정답: {props.correct}</Text>
            <View style={styles.nextBtnView}>
                <Button title="다음 문제" style={styles.nextBtn} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    confirmView: {
        width:300,
        height:300,
        backgroundColor: '#f8faa5'
    },
    nextBtnView: {
        width: 100,
        alignItems: 'center'
    },
    nextBtn: {
        backgroundColor: '#32a852'
    }
})