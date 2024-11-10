import { StyleSheet, Button, View, Text, SafeAreaView } from 'react-native';

export default function Title(props) {
    return(
        <SafeAreaView>
            <Text style={styles.header}>{props.idx}. {props.question}</Text>
        </SafeAreaView>
    )
}
 const styles = StyleSheet.create({
    header: {
        fontFamily: "Pixel",
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 10,
    }
 })