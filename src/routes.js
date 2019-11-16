import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Menu from './pages/Menu';
import MenuUsuario from './pages/MenuUsuario';
import Sisaa from './pages/Sisaa';
import Colaboradores from './pages/Colaboradores';
import Cadastro from './pages/Cadastro';
import AbrigoRampa from './pages/CheckListAbrigoRampa';
import EquipVeiculo from './pages/CheckListEquipVeiculo';
import CadastroAeronave from './pages/FormularioCadastroAeronave';
import MenuDape from './pages/MenuDape';
import Formulario400Hz from './pages/Formulario_400Hz';
import FormularioAmbulift from './pages/Formulario_Ambulift';
import FormularioLavagemTecnica from './pages/Formulario_LavagemTecnica';
import FormularioTripulanteDesembarque from './pages/Formulario_TripulanteDesembarque';

const StackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null,
        })
    },
    Menu: {
        screen: Menu,
        navigationOptions: () => ({
            headerTitle: 'Menu',
            headerLeft: null,
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1  
            },
            headerStyle:{
                backgroundColor: "#1874CD", 
            },
            headerTintColor: "#FFF",
        })
    },
    MenuUsuario: {
        screen: MenuUsuario,
        navigationOptions: () => ({
            headerTitle: 'Menu',
            headerLeft: null,
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1  
            },
            headerStyle:{
                backgroundColor: "#1874CD", 
            },
            headerTintColor: "#FFF",
        })
    },
    Sisaa: {
        screen: Sisaa,
        navigationOptions: () => ({
            headerTitle: 'SISAA',
            headerTitleStyle: { 
                textAlign:"center",
                flex: 1,
            },
            headerBackTitleVisible: true,
            headerBackTitle: 'Menu',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    Colaboradores: {
        screen: Colaboradores,
        navigationOptions: () => ({
            headerTitle: 'Colaboradores',
            headerTitleStyle:{
                textAlign: 'center',                
                flex: 1
            },
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    AbrigoRampa: {
        screen: AbrigoRampa,
        navigationOptions: () => ({
            headerTitle: 'Abrigo de Rampa',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    EquipVeiculo: {
        screen: EquipVeiculo,
        navigationOptions: () => ({
            headerTitle: 'Equipamento e Veículos',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    Cadastro: {
        screen: Cadastro,
        navigationOptions: () => ({
            headerTitle: 'Cadastro',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    CadastroAeronave: {
        screen: CadastroAeronave,
        navigationOptions: () => ({
            headerTitle: 'Cadastro de Aeronave',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: "#104E8B",           
            },
            headerTintColor: "#FFF"
        })
    },
    MenuDape: {
        screen: MenuDape,
        navigationOptions: () => ({
            headerTitle: 'Menu Dape - Formulários',
            headerTitleAlign: 'center',
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    Formulario400Hz: {
        screen: Formulario400Hz,
        navigationOptions: () => ({
            headerTitle: '400 Hz',
            headerTitleStyle: { 
                textAlign:"center",
                flex: 1 
            },
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    FormularioAmbulift: {
        screen: FormularioAmbulift,
        navigationOptions: () => ({
            headerTitle: 'Ambulift',
            headerTitleStyle: { 
                textAlign:"center",
                flex: 1 
            },
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    FormularioLavagemTecnica: {
        screen: FormularioLavagemTecnica,
        navigationOptions: () => ({
            headerTitle: 'Lavagem Técnica',
            headerTitleStyle: { 
                textAlign:"center",
                flex: 1 
            },
            headerStyle:{
              backgroundColor: "#104E8B",            
            },
            headerTintColor: "#FFF"
        })
    },
    FormularioTripulanteDesembarque: {
        screen: FormularioTripulanteDesembarque,
        navigationOptions: () => ({
            headerTitle: 'Tripulante e/ou Desembarque Híbrido',
            headerTitleAlign: 'center',
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

const Routes = createAppContainer(StackNavigator)

export default Routes;