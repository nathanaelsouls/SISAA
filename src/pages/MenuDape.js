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
        <TouchableOpacity style={styles.colunasBotao}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Formulario400Hz')} style={styles.menuButton} >
<<<<<<< HEAD
            <Image style={{ width: '50%', height: '50%' }} source={require('../imagens/dape.png')}/>
=======
            <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/energy.png')}/>
>>>>>>> 4bb8889237f1fc455fc230a74c0808cdc483860a
            <Text/>
            <Text style={styles.buttonText}>400 Hz</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('FormularioAmbulift')} style={styles.menuButton} >
<<<<<<< HEAD
            <Image style={{ width: '50%', height: '50%' }} source={require('../imagens/duvida.png')}/>
=======
            <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/ambulift.png')}/>
>>>>>>> 4bb8889237f1fc455fc230a74c0808cdc483860a
            <Text/>
            <Text style={styles.buttonText}>Ambulift</Text>                
            </TouchableOpacity>
        </TouchableOpacity>
        </View>
        <View style={styles.colunasMenu}>            
        <TouchableOpacity style={styles.colunasBotao}>                
            <TouchableOpacity onPress={() => this.props.navigation.navigate('FormularioTripulanteDesembarque')} style={styles.menuButton} >
<<<<<<< HEAD
            <Image style={{ width: '50%', height: '50%' }} source={require('../imagens/duvida.png')}/>
=======
            <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/landing.png')}/>
>>>>>>> 4bb8889237f1fc455fc230a74c0808cdc483860a
            <Text style={styles.buttonText}>Tripulante e/ou Desembarque Híbrido</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('FormularioLavagemTecnica')} style={styles.menuButton} >
<<<<<<< HEAD
            <Image style={{ width: '50%', height: '50%' }} source={require('../imagens/duvida.png')}/>            
=======
            <Image backgroundColor='white' style={{ width: '50%', height: '50%' }} source={require('../imagens/wash.png')}/>            
>>>>>>> 4bb8889237f1fc455fc230a74c0808cdc483860a
            <Text/>
            <Text style={styles.buttonText}>Lavagem Técnica</Text>                            
            </TouchableOpacity>
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
backgroundColor: "#104E8B",
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
backgroundColor: "#104E8B",
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