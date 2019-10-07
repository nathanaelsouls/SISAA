import React from 'react';
import {  createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

//import Menu from '../pages/Menu'
import Cadastro from '../pages/Cadastro';
import Sisaa from '../pages/Sisaa';

const mainNavigation = createDrawerNavigator({    
    /*Menu: {
      screen: Menu,
      navigationOptions: () => ({
        drawerIcon: <Icon name="Home" size={20} />,
      }),
    },*/
    Cadastro: {
      screen: Cadastro,
      navigationOptions: () => ({
        drawerIcon: <Icon name="user-plus" size={20} />,
      }),
    },
    Sisaa: {        
        screen: Sisaa,
        navigationOptions: () => ({
            drawerIcon: <Icon name="info" size={20} />,
        }),
    },
  });
  
  export default createAppContainer(mainNavigation);