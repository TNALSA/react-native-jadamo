import { StyleSheet, Button, View, Text } from 'react-native';

export default function Title(props) {
    return(
        <View>
            <Text style={styles.header}>{props.idx}. {props.question}</Text>
        </View>
    )
}
 const styles = StyleSheet.create({
    header: {
        fontFamily: "Pixel",
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 10,
        fontStyle: 'Arial'
    }
 })