import React from 'react';
import {  createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../pages/Login';
import Menu from '../pages/Menu'
import Cadastro from '../pages/Cadastro';
import Sisaa from '../pages/Sisaa';
import Colaboradores from '../pages/Colaboradores';

import AbrigoRampa from '../pages/CheckListAbrigoRampa';
import EquipVeiculo from '../pages/CheckListEquipVeiculo';


const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
      drawerLockMode: 'locked-closed'
    })
  },  
});

const MenuNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: () => ({
      title: 'Menu',
      headerStyle:{
        backgroundColor: "#104E8B",            
      },
      headerTintColor: "#FFF",
      headerLeft: (
        <Icon
          style={{padding:10 , color: 'white'}}
          onPress={() => alert('teste')}
          name="bars"
          size={30} />
      ),
    })
  },
});

const CadastroNavigator = createStackNavigator({
  Cadastro: {
    screen: Cadastro,
    navigationOptions: () => ({
      title: 'Cadastro',
      headerStyle:{
        backgroundColor: "#104E8B",            
      },
      headerTintColor: "#FFF"
    })
  }  
});

const SisaaNavigator = createStackNavigator({
  Sisaa: {
    screen: Sisaa,
    navigationOptions: () => ({
      title: 'Sisaa',
      headerStyle:{
        backgroundColor: "#104E8B",            
      },
      headerTintColor: "#FFF"
    })
  }
});

const ColaboradoresNavigator = createStackNavigator({
  Colaboradores: {
    screen: Colaboradores,
    navigationOptions: () => ({
      title: 'Colaboradores',
      headerStyle:{
        backgroundColor: "#104E8B",            
      },
      headerTintColor: "#FFF"
    })
  } 
});

const AbrigoRampaNavigator = createStackNavigator({
  AbrigoRampa: {
    screen: AbrigoRampa,
    navigationOptions: () => ({
      title: 'Abrigo de Rampa',
      headerStyle:{
        backgroundColor: "#104E8B",            
      },
      headerTintColor: "#FFF"
    })
  } 
});

const EquipVeiculoNavigator = createStackNavigator({
  EquipVeiculo: {
    screen: EquipVeiculo,
    navigationOptions: () => ({
      title: 'Equipamentos e Veículos', 
      headerStyle:{
        backgroundColor: "#104E8B",          
      },
      headerTintColor: "#FFF"
    })
  } 
});
const DrawerNavigation = createDrawerNavigator({    
  Login:{
    screen: LoginNavigator,
  },
  Menu: {
    screen: MenuNavigator,
  },
  Cadastro: {
    screen: CadastroNavigator,
  },
  Sisaa: {        
    screen: SisaaNavigator,
  },
  Colaboradores: {
    screen: ColaboradoresNavigator,
  },
  AbrigoRampa: {
    screen: AbrigoRampaNavigator,
  },
  EquipVeiculo: {
    screen: EquipVeiculoNavigator,
  }
  },
  {
    //initialRouteName: 'Login'
  }
  );
  
  export default createAppContainer(DrawerNavigation);