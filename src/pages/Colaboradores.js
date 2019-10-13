import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Colaboradores extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Colaboradores</Text>
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