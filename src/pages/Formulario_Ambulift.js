import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import firebase from "firebase";

var {height, width} = Dimensions.get('window');

export default class Formulario_Ambulift extends React.Component{  
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      // Padrão
      Fiscal_Patio:   "",  Fiscal_Matricula: "", Data: "",
      //Dados
      Voo: "", EmpresaSolicitante: "", Prefixo: "", NomeSolicitante: "", HoraSolicitacao: "", Posicao: ""
    };
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {        
      if (user){//Se é diferente de null, se é true, se é diferente de vazio, se é diferente de undefind
      this.setState({userUid: user.uid});
      firebase.database().ref("Users")
      .orderByChild("uid")
      .equalTo(user.uid)
      .once("value")
      .then((snapshot)=>{
        this.setState({userData: snapshot.val()[user.uid]})
      })
      }
    }.bind(this));
  }
  render() {
    return(      
      <ScrollView style={styles.container}>
       <View style={styles.container}>
         <Card style={styles.containercard}>
           <Text style={styles.text}>Favor informar a Data Atual:*</Text>
           <TextInput
           style={styles.inputBox}
           onChangeText={(text) => this.setState({Data: text})}
           placeholder="dd/mm/aaaa"
           value={this.state.Data} 
           />
           <Text style={styles.text}>Empresa solicitante do Serviço:*</Text>
           <TextInput
           style={styles.inputBox}
           onChangeText={(text) => this.setState({EmpresaSolicitante: text})}
           placeholder="Empresa Solicitante"
           value={this.state.EmpresaSolicitante} 
           />
           <Text style={styles.text}>Prefixo:*</Text>
           <TextInput
           style={styles.inputBox}
           onChangeText={(text) => this.setState({Prefixo: text})}
           placeholder="Prefixo"
           value={this.state.Prefixo} 
           />
           <Text style={styles.text}>Nome do Solicitante(representante da cia Aérea ou esata):*</Text>
           <TextInput
           style={styles.inputBox}
           onChangeText={(text) => this.setState({NomeSolicitante: text})}
           placeholder="Solicitante"
           value={this.state.NomeSolicitante} 
           />
           <Text style={styles.text}>Hora Solicitação:*</Text>
           <TextInput
           style={styles.inputBox}
           onChangeText={(text) => this.setState({HoraSolicitacao: text})}
           placeholder="Formato: 24h"
           value={this.state.HoraSolicitacao} 
           />
           <Text style={styles.text}>Posição:*</Text>
           <TextInput
           style={styles.inputBox}
           onChangeText={(text) => this.setState({Posicao: text})}
           placeholder="Posição"
           value={this.state.Posicao} 
           />
           <TouchableOpacity onPress={()=> this.askRegister()} style={styles.FormularioButton} >
               <Text style={styles.buttonText}>Enviar Formulário</Text>
           </TouchableOpacity>
         </Card>                   
       </View>
        <Text> </Text>
     </ScrollView>
    );
  }
 askRegister(){
    var DataVerifica = this.state.Data;
    var validar = this.ValidarCampos();
    if(DataVerifica == ""){
      Alert.alert(
        'Atenção', 'Por favor, Informe a Data Atual!'
      )
    }else{    
      Alert.alert(
        'Registrar',
        'Confirma Formulário Ambulift?\nEmpresa: ' + this.state.EmpresaSolicitante ,
        [
          {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () =>
            this.confirmRegister(
              this.state.userData.matricula,  this.state.userData.nome,      this.state.Data,
              this.state.userData.Voo,        this.state.EmpresaSolicitante, this.state.Prefixo,
              this.state.NomeSolicitante,     this.state.HoraSolicitacao,    this.state.Posicao
            )},
        ],
        { cancelable: false }
      )
    }  
  }
  confirmRegister () {
    const userData = {
      _01_FiscalPatio_Matricula:          this.state.userData.matricula,
      _02_FiscalPatio_Nome:               this.state.userData.nome,
      _03_Data_Cadastro_Formulario:       this.state.Data,
      _04_Voo:                            this.state.Voo,
      _05_Empresa_Solicitante:            this.state.EmpresaSolicitante,
      _06_Prefixo:                        this.state.Prefixo,
      _07_Nome_Solicitante:               this.state.NomeSolicitante,
      _08_Hora_Solicitação:               this.state.HoraSolicitacao,
      _09_Posição:                        this.state.Posicao    
    }
      firebase.database().ref("DAPE_Ambulift/").push(userData)
      .then((snapshot) => {
        Alert.alert("Sucesso!", "Formulário Enviado");
        this.props.navigation.navigate('MenuDape');
      })
      .catch((error) =>{
        console.log("Error: ", error);
        Alert.alert("Erro na persistência dos dados!", error.code)
      })      
  }

  ValidarCampos(){
    var DataVerifica = this.state.Data;
    if(DataVerifica == ""){
      Alert.alert('Atenção', 'Por favor, Informe a Data Atual!')
      return false;
    }
    if(this.state.EmpresaSolicitante == null || this.state.EmpresaSolicitante == "") {
      
    }

    return true;
  }

}
const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor: '#012060',
  flexDirection: 'column',
},
containercard:{
    flex: 2,
    width:'90%',
},
Titulo: {
  fontSize: 25,
  color: 'black',
  flex: 1,
  alignSelf: 'center',
  fontWeight: "bold"
},
text: {
  fontSize: 16,
  color: 'black',
  flex: 1,
  alignSelf: 'flex-start',
},
inputBox:{
  height: 40, 
  borderWidth: 1,
  backgroundColor: '#FFFAFA',
  borderRadius: 10,
  textAlign: 'center',
  paddingHorizontal: 16,
  marginVertical: 10,
  fontSize: 15
},
textObrig:{
  color: 'red'
},
FormularioButton:{
  backgroundColor: "#001A4D",
  borderRadius: 10,
  padding: 10,
  margin: 8,
  alignItems: 'center',
  justifyContent: 'center'
},  
buttonText:{
  color: "white",
  fontSize: 25
},
});