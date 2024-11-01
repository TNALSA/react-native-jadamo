import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppContext from '../Appcontext';

export default function StartPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title_yellow}>자다모,</Text>
                <Text style={styles.title}>    자격증 다 모아!</Text>
            </View>
            <View style={styles.start_container}>
                <TouchableOpacity onPress={() => { navigation.navigate("ChoosePage") }}>
                    <Text style={styles.start_text}>START</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", // 수직 중앙 정렬
        backgroundColor: '#c9c9c9', // 배경색 추가
    },
    titleContainer: {
        marginBottom: 250, // 제목과 버튼 간의 여백
    },
    title: {
        fontFamily: "Pixel",
        fontSize: 35
    },
    title_yellow: {
        fontFamily: "Pixel",
        fontSize: 35,
        color: '#fced0f'
    },
    start_container: {
        alignItems: 'center', // 버튼을 중앙에 배치
    },
    start_text: {
        fontFamily: "Pixel",
        fontSize: 35,
        color: '#0008f0'
    },
    
});
