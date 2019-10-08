import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Sisaa from './pages/Sisaa';
import Colaboradores from './pages/Colaboradores';
import Menu from './pages/Menu';
import AbrigoRampa from './pages/CheckListAbrigoRampa';
import EquipVeiculo from './pages/CheckListEquipVeiculo';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const AppNavigator = createStackNavigator({
    Login,
    Menu,
    Sisaa,
    Colaboradores,
    AbrigoRampa,
    EquipVeiculo,
    Cadastro
});

const Routes = createAppContainer(AppNavigator)

export default Routes;