import { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

//onst name = useState("네트워크 관리사 2급");

export default function ContentList(props) {
    const name = props.name;
    return(
        <TouchableOpacity style = {styles.contentlist} onPress={() => props.navigation.navigate("ProblemPage", {name: name, navigation: props.navigation})}>
            <Text style={styles.contentlist_text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contentlist: {
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 15,
        alignItems: 'center',
        width:'auto',
        marginBottom:10,
        backgroundColor: '#ededed'
    },
    contentlist_text:{
        fontFamily: "Pixel",
        fontSize: 20
    }
})
