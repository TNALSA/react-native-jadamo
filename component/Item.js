import { RadioButton } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react"

export default function Item(props) {
    const [checked, setChecked] = useState('first');

    return(
        <View style={styles.contentView} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text>{props.answers[0]}</Text> {/* 텍스트 추가 */}
            </View>  
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                />
                <Text>{props.answers[1]}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="third"
                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('third')}
                />
                <Text>{props.answers[2]}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="forth"
                    status={ checked === 'forth' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('forth')}
                />
                <Text>{props.answers[3]}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contentView: {
        marginBottom: 10
    }
})