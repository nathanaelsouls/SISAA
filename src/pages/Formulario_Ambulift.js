import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Formulario_Ambulift extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Formulário Ambulift</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
    }
});