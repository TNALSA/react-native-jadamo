import { useContext } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import AppContext from "../Appcontext"

export default function ResultPage({navigation}) {
    const myContext = useContext(AppContext);

    return(
        <View style={styles.container}> 
            <View>
                {myContext.score > 30 ? 
                    <Text style={styles.text_result}>축하합니다! 합격하셨습니다.</Text> : <Text style={styles.result}>불합격입니다... 다음엔 조금 더 노력하세요ㅠㅠ </Text>
                }
                <Text style={styles.text_score}>내가 맞힌 문제 수: {myContext.score}</Text>
                <Text style={styles.text_score}>점수: {myContext.score * 2}점</Text> 
            </View>
            <View style={styles.button_view}>
                <Button title="다른 기출문제 풀기" onPress={() => navigation.navigate("ChoosePage")} color='#0008f0'/>
                <Button title="처음으로" onPress={() => navigation.navigate("StartPage")} color='#0008f0'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: 'auto',
        alignItems:'center',
        backgroundColor: '#c9c9c9'
    },
    text_result: {
        fontFamily: "Pixel",
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 15
    },
    text_score: {
        fontFamily: "Pixel",
        fontSize: 16
    },
    button_view: {
        display:'flex'
    }
})