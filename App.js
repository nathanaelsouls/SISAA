import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Sisaa from './src/pages/Sisaa'
import Colaboradores from './src/pages/Colaboradores'
import Menu from './src/pages/Menu'
import DrawerNavigator from './src/navigation/DrawerNavigator'

export default class App extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Menu />
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
});