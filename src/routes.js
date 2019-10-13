import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native';

import Sisaa from './pages/Sisaa';
import Colaboradores from './pages/Colaboradores';
import Menu from './pages/Menu';
import AbrigoRampa from './pages/CheckListAbrigoRampa';
import EquipVeiculo from './pages/CheckListEquipVeiculo';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const StcakNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null,
        })
    },
    Menu: {
        screen: Menu,
        navigationOptions: () => ({
            title: 'Menu',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF",
        })
    },
    Sisaa: {
        screen: Sisaa,
        navigationOptions: () => ({
            title: 'Sisaa',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    Colaboradores: {
        screen: Colaboradores,
        navigationOptions: () => ({
            title: 'Colaboladores',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    AbrigoRampa: {
        screen: AbrigoRampa,
        navigationOptions: () => ({
            title: 'Abrigo de Rampa',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    EquipVeiculo: {
        screen: EquipVeiculo,
        navigationOptions: () => ({
            title: 'Equipamento e Veículos',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    Cadastro: {
        screen: Cadastro,
        navigationOptions: () => ({
            title: 'Cadastro',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
},
{
    initialRouteKey: 'Login'
}
);

const Routes = createAppContainer(StcakNavigator)

export default Routes;