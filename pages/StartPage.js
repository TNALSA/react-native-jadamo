import { StyleSheet, Button, View, Text } from 'react-native';

export default function StartPage({navigation}) {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>자다모, 자격증 다 모아!</Text>
            </View>
            <View>
                <Button title="시작" onPress={() => {navigation.navigate("ChoosePage")}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center"
    },
    title: {
        fontSize: 24, // 제목 크기 조정
        fontWeight: 'bold', // 제목 두껍게
        textAlign: 'center', // 중앙 정렬
        marginBottom: 20, // 버튼과의 간격
    },
})
