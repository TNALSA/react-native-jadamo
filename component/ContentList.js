import { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

//onst name = useState("네트워크 관리사 2급");

export default function ContentList(props) {
    const name = props.name;
    return(
        <TouchableOpacity style = {styles.ContentList} onPress={() => props.navigation.navigate("ProblemPage", {name: name})}>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    ContentList: {
        backgroundColor: '#C1F2FE',
        padding: 15,
        alignItems: 'center',
        width:'auto',
    }
})
