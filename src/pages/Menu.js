import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Button, ImageBackground } from 'react-native';
import firebase from "firebase";
import Icon from 'react-native-vector-icons/FontAwesome';

var { height, width } = Dimensions.get('window');

export default class Menu extends React.Component {
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
        <View style={{width: '100%', height: 45, flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{backgroundColor: "transparente", justifyContent: 'center',
            width: '20%', height: '161%', alignItems: 'flex-start'}} onPress={() => this.props.navigation.navigate('Cadastro')} >
            <Image style={{ width: '45%', height: '45%' }} source={require('../imagens/cadastro.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "transparente", justifyContent: 'center',
            width: '20%', height: '161%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Sisaa')} >
            <Image style={{ width: '45%', height: '45%' }} source={require('../imagens/informacao.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "transparente", justifyContent: 'center',
            width: '20%', height: '161%', alignItems: 'flex-end'}} onPress={() => this.logout()} >
            <Image style={{ width: '45%', height: '45%' }} source={require('../imagens/logout.png')}/>
          </TouchableOpacity>    
        </View>        
        
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
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
  openAlert(){
    alert('Em Desenvolvimento !');
  }
        
  logout(){
      firebase.auth().signOut()
        .then( () => {
          this.props.navigation.navigate('Login');
        })
        .catch((error) => {
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
    justifyContent:'flex-start',
    alignItems:'flex-start',
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
