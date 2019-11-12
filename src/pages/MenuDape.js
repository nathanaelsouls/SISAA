import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

var { height, width } = Dimensions.get('window');

export default class MenuDape extends React.Component{
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
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>    
        <View style={styles.colunasMenu}>            
        
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Formulario400Hz')} style={styles.menuButton} >
            <Image style={{ width: '80%', height: '50%' }} source={require('../imagens/energy.png')}/>
            <Text/>
            <Text style={styles.buttonText}>400 Hz</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('FormularioAmbulift')} style={styles.menuButton} >
            <Image style={{ width: '80%', height: '50%' }} source={require('../imagens/ambulift.png')}/>
            <Text/>
            <Text style={styles.buttonText}>Ambulift</Text>                
            </TouchableOpacity>
        
        </View>
        <View style={styles.colunasMenu}>            
                       
            <TouchableOpacity onPress={() => this.props.navigation.navigate('FormularioTripulanteDesembarque')} style={styles.menuButton} >
            <Image style={{ width: '80%', height: '50%' }} source={require('../imagens/landing.png')}/>
            <Text style={styles.buttonText}>Tripulante e/ou Desembarque Híbrido</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('FormularioLavagemTecnica')} style={styles.menuButton} >
            <Image style={{ width: '80%', height: '50%' }} source={require('../imagens/wash.png')}/>            
            <Text/>
            <Text style={styles.buttonText}>Lavagem Técnica</Text>                            
            </TouchableOpacity>
        
        </View>
    </View>
    <Text style={{color: 'white'}}> Versão 1.0 </Text>
    </View>
    
);
}  

AbrigoRampa(){
this.props.navigation.navigate('AbrigoRampa');
}
EquipVeiculo(){
this.props.navigation.navigate('EquipVeiculo');
}
CadastroAeronave(){
this.props.navigation.navigate('CadastroAeronave');
}
MenuDape(){
this.props.navigation.navigate('MenuDape');
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
    backgroundColor: "#001A4D",
},
buttonText:{
    color: "white",
    fontSize: 16,
    textAlign: "center",  
},
logoutText:{
    color: "#012060",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
},
colunasBotao:{
    backgroundColor: "#001A4D",
    justifyContent: 'space-around',
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    width: '110%',
    height: '75%'    
},
menuButton: {
    backgroundColor: "#001A4D",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    height: '42%'    
},
colunasMenu:{
    flex: 1, 
    flexDirection: 'column', 
    justifyContent:'center',
    alignItems:'center',
},
});