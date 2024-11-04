import { useContext } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import AppContext from "../Appcontext"

export default function ResultPage({navigation}) {
    const myContext = useContext(AppContext);

    return(
        <View style={styles.container}> 
            <View>
                {myContext.score > 30 ? 
                    <Text style={styles.text}>축하합니다! 합격하셨습니다.</Text> : <Text style={styles.text}>불합격입니다... 다음엔 조금 더 노력하세요ㅠㅠ </Text>
                }
                <Text>내가 맞힌 문제 수: {myContext.score}</Text>
                <Text>점수: {myContext.score * 2}점</Text> 
            </View>
            <View>
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
    result: {
        fontFamily: "Pixel",
        fontSize: 20, 
        fontWeight: 'bold', 
    },
})