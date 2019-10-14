import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView,} from 'react-native';
import { Card } from 'react-native-elements';

var {height, width} = Dimensions.get('window');

export default class Colaboradores extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                
                <Text style={styles.Titulo}>Colaboradores</Text>
                
            </View>
 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    Titulo: {
        fontSize: 25,
        color: 'black',
        fontWeight: "bold",
        alignItems: 'center',        
        alignSelf: 'center'
    },
});