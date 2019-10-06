import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default class Menu extends React.Component{
    static navigationOptions = {
        title: 'Menu',
      };

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Menu</Text>
                <Button 
                title="CheckLis Abrigo de Rampa"
                onPress={() => this.props.navigation.navigate('AbrigoRampa')}
                />
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