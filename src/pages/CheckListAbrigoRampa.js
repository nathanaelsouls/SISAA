import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AbrigoRampa extends React.Component{
    static navigationOptions = {
        title: 'Sisaa',
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