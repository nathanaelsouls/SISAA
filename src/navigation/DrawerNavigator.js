import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Menu from '../pages/Menu'

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Menu
        },
    },
);

export default createAppContainer(DrawerNavigator);