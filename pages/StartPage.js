import { Button, View } from "react-native-web";
import { StyleSheet } from 'react-native';

export default function StartPage({navigation}) {
    return(
        <View style={styles.container}>
            <View>
                <h1>자다모, 자격증 다 모아!</h1>
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
    }
})
