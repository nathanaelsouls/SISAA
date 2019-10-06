import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AbrigoRampa extends React.Component{
    static navigationOptions = {
        title: 'Abrigo de Rampa',
      };
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Abrigo de Rampa</Text>
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