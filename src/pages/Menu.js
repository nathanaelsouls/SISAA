import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
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
        <View style={{width: '100%', height: '15%', flexDirection: 'row', justifyContent: 'space-around',
                      alignItems: 'center'}}>
          <TouchableOpacity style={{backgroundColor: "transparente", justifyContent: 'center',
            width: '25%', height: '161%', alignItems: 'flex-start'}} onPress={() => this.props.navigation.navigate('Cadastro')} >
            <Image style={{ width: '47%', height: '31%' }} source={require('../imagens/cadastro.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "transparente", justifyContent: 'center',
            width: '25%', height: '161%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Sisaa')} >
            <Image style={{ width: '47%', height: '31%' }} source={require('../imagens/informacao.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "transparente", justifyContent: 'center',
            width: '25%', height: '161%', alignItems: 'flex-end'}} onPress={() => this.logout()} >
            <Image style={{ width: '47%', height: '31%' }} source={require('../imagens/logout.png')}/>
          </TouchableOpacity>
        </View>
        <View>
          <Text/>
          <Text/>          
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
          <View style={styles.colunasMenu}>
            <TouchableOpacity style={styles.colunasBotao}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AbrigoRampa')} style={styles.menuButton} >
                <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/abrigoRampa.png')}/>
                <Text/>
                <Text style={styles.buttonText}>Abrigo de Rampa</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('EquipVeiculo')} style={styles.menuButton} >
              <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/veiculosEquipamentos.png')}/>
                <Text style={styles.buttonText}>Equipamentos e Veículos</Text>                
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.colunasMenu}>            
            <TouchableOpacity style={styles.colunasBotao}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CadastroAeronave')} style={styles.menuButton} >
              <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/aeronave.png')}/>
                <Text style={styles.buttonText}>Cadastro de Aeronave</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('MenuDape')} style={styles.menuButton} >
              <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/dape.png')}/>
                <Text/>
                <Text style={styles.buttonText}>Dape</Text>                
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{color: 'black'}}> Versão 1.0 </Text>
      </View>
      
    );
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
    fontSize: 16,
    textAlign: "center",  
  },
  colunasBotao:{
    backgroundColor: "#104E8B",
    justifyContent: 'space-around',
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    width: '110%',
    height: '80%'    
  },
  menuButton: {
    backgroundColor: "#001A4D",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    width: '78%',
    height: '42%'    
  },
  colunasMenu:{
    flex: 1, 
    flexDirection: 'column', 
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  logout: {
    backgroundColor: "transparent",
    padding: 10,
    margin: 10,
    alignSelf: "flex-start"
  }
});