import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Sisaa from './pages/Sisaa'
import Colaboradores from './pages/Colaboradores'
import Menu from './pages/Menu'
import AbrigoRampa from './pages/CheckListAbrigoRampa'

const AppNavigator = createStackNavigator({
    Menu,
    Sisaa,
    Colaboradores,
    AbrigoRampa
});

const Routes = createAppContainer(AppNavigator)

export default Routes;