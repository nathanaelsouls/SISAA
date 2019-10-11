import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar, Image, Button } from 'react-native';
import firebase from "firebase";
import DrawerNavigation from '../navigation/DrawerNavigator'

var { height, width } = Dimensions.get('window');

export default class Dashboard extends React.Component {
    static navigationOptions = {
        title: 'Menu',
        DrawerNavigation: 'Teste'
      };

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="#001A4D" barStyle="light-content" />         
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Button title='Cadastro de funcionário'
            onPress={() => this.props.navigation.navigate('Cadastro')}>
            </Button>
            <Button title="opções" >
                <DrawerNavigation/>
            </Button>
        </View>
        <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>          
          <View style={styles.colunasMenu}>
            <TouchableOpacity style={styles.colunasBotao}>
              <Text style={styles.titleText}>CheckLists</Text>
              <TouchableOpacity onPress={() => this.AbrigoRampa()} style={styles.menuButton} >
                <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/abrigoRampa.png')}/>
                <Text style={styles.buttonText}>Abrigo de Rampa</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.EquipVeiculo()} style={styles.menuButton} >
              <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/veiculosEquipamentos.png')}/>
                <Text style={styles.buttonText}>Equipamentos</Text>
                <Text style={styles.buttonText}>Veículos</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>


          <View style={styles.colunasMenu}>            
            <TouchableOpacity style={styles.colunasBotao}>
              <Text style={styles.titleText}>Formulários</Text>
              <TouchableOpacity onPress={() => this.openAlert()} style={styles.menuButton} >
              <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/aeronave.png')}/>
                <Text style={styles.buttonText}>Cadastro de</Text>
                <Text style={styles.buttonText}>Aeronave</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.openAlert()} style={styles.menuButton} >
              <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/dape.png')}/>
                <Text style={styles.buttonText}> </Text>
                <Text style={styles.buttonText}>Dape</Text>                
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
      
    );
  }
   
  
  AbrigoRampa(){
    this.props.navigation.navigate('AbrigoRampa');
  }
  EquipVeiculo(){
    this.props.navigation.navigate('EquipVeiculo');
  }
  Cadastro(){
    Actions.signup();
  }        
  openAlert(){
    alert('Em Desenvolvimento !');
  }
        
  logout(){
      firebase.auth().signOut()
        .then(function () {
          Actions.login();
        })
        .catch(function (error) {
          alert.alert("Atenção", "DEu ruim meu chapa");
        });
    }
  }
       
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#104E8B",
  },
  buttonText:{
    color: "white",
    fontSize: 15,
    textAlign: "center",    
  },
  logoutText:{
    color: "#012060",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
  },
  colunasBotao:{
    backgroundColor: "#104E8B",
    justifyContent: 'space-around',
    borderRadius: 15,
    alignSelf: "center",
    alignItems: 'center',
    width: '87%',
    height: '55%'    
  },
  menuButton: {
    backgroundColor: "#001A4D",
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 10,
    padding: 10,
    width: '75%',
    height: '40%'    
  },
  colunasMenu:{
    flex: 1, 
    flexDirection: 'column', 
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:{
    fontSize: 25,
    alignItems: 'center',
    textAlign: 'center',
    color: "white"
  },
  menuText:{
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    color: "white"
  },
  logout: {
    backgroundColor: "transparent",
    padding: 10,
    margin: 10,
    alignSelf: "flex-start"
  }
});
