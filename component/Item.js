import { RadioButton } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { useContext, useState } from "react"
import AppContext from "../Appcontext";

export default function Item(props) {
    // const [checked, setChecked] = useState(1);
    const myContext = useContext(AppContext);

    return(
        <View style={styles.contentView} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="first"
                    status={myContext.checked === 1 ? 'checked' : 'unchecked'}
                    onPress={() => myContext.setCheckedNumber(1)}
                />
                <Text style={styles.item_text}>{props.answers[0]}</Text> {/* 텍스트 추가 */}
            </View>  

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="second"
                    status={ myContext.checked === 2 ? 'checked' : 'unchecked' }
                    onPress={() => myContext.setCheckedNumber(2)}
                />
                <Text style={styles.item_text}>{props.answers[1]}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="third"
                    status={ myContext.checked === 3 ? 'checked' : 'unchecked' }
                    onPress={() => myContext.setCheckedNumber(3)}
                />
                <Text style={styles.item_text}>{props.answers[2]}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="forth"
                    status={ myContext.checked === 4 ? 'checked' : 'unchecked' }
                    onPress={() => myContext.setCheckedNumber(4)}
                />
                <Text style={styles.item_text}>{props.answers[3]}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contentView: {
        marginBottom: 10
    },
    item_text:{
        fontFamily:"Pixel",
        fontSize: 18
    }
})