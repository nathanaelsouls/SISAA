import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import firebase from "firebase";
import DatePicker from 'react-native-datepicker';

var {height, width} = Dimensions.get('window');

export default class Formulario_LavagemTecnica extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          deviceWidth: width,
          deviceHeight: height,
          // Padrão
          Fiscal_Patio:   "",  Fiscal_Matricula: "", date: "",
          //Dados
          Voo: "", Prefixo: "", PosicaoLocal: "", NomeSolicitante: "",
          EmpresaSolicitante: "" , HoraSolicitacao: "", EmpresaEnvolvida: ""
        };
    }

    selectDate = (date) => {
      this.setState({date: date});
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
                        <Text style={{color: 'black', alignSelf: 'flex-start', fontSize: 15}}>Confirme a Data pelo o calendário:</Text>
                        <DatePicker
                        style={{width: 305, marginVertical: 10}}
                        date={this.state.date}
                        format="DD-MM-YYYY"
                        minDate="01-11-2019"
                        maxDate="31-12-2020"
                        onDateChange={this.selectDate}                                   
                        />
                        <Text style={styles.text}>Voo (se aplicável):</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({Voo: text})}
                        placeholder="Voo"
                        value={this.state.Voo} 
                        />
                        <Text style={styles.text}>Prefixo (se aplicável):</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({Prefixo: text})}
                        placeholder="Prefixo"
                        value={this.state.Prefixo} 
                        />
                        <Text style={styles.text}>Posição ou local a ser lavado:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({PosicaoLocal: text})}
                        placeholder="Posição ou Local"
                        value={this.state.PosicaoLocal} 
                        />
                        <Text style={styles.text}>Nome do Solicitante:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({NomeSolicitante: text})}
                        placeholder="Solicitante"
                        value={this.state.NomeSolicitante} 
                        />
                        <Text style={styles.text}>Empresa solicitante:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({EmpresaSolicitante: text})}
                        placeholder="Empresa Solicitante"
                        value={this.state.EmpresaSolicitante} 
                        />
                        <Text style={styles.text}>Hora Solicitação:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({HoraSolicitacao: text})}
                        placeholder="Formato: 24h"
                        value={this.state.HoraSolicitacao} 
                        />
                        <Text style={styles.text}>Empresa envolvida no derramamento:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({EmpresaEnvolvida: text})}
                        placeholder="Empresa Envolvida"
                        value={this.state.EmpresaEnvolvida} 
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
      var validar = this.ValidarCampos();
      if(validar){    
          Alert.alert(
            'Registrar',
            'Confirma Formulário Lavagem Técnica?\nEmpresa: ' + this.state.EmpresaSolicitante ,
            [
              {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () =>
                this.confirmRegister(this.state.userData.matricula,  this.state.userData.nome,           this.state.date,
                  this.state.userData.Voo,       this.state.Prefixo,         this.state.PosicaoLocal,    this.state.NomeSolicitante,
                  this.state.EmpresaSolicitante, this.state.HoraSolicitacao, this.state.EmpresaEnvolvida,  
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
          _03_Data_Cadastro_Formulario:       this.state.date,
          _04_Voo:                            this.state.Voo,
          _05_Prefixo:                        this.state.Prefixo,
          _06_Posição_Local:                  this.state.PosicaoLocal,
          _07_Nome_Solicitante:               this.state.NomeSolicitante,
          _08_Empresa_Solicitante:            this.state.EmpresaSolicitante,          
          _09_Hora_Solicitação:               this.state.HoraSolicitacao,
          _10_Empresa_Envolvida:              this.state.EmpresaEnvolvida,
              
        }
          firebase.database().ref("DAPE_LavagemTécinca/").push(userData)
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
        if(this.state.date == null || this.state.date == ""){
          Alert.alert('Atenção!', 'Confirme a data no calendário.');
          return false;
        }
        if(this.state.PosicaoLocal == null || this.state.PosicaoLocal == "") {
          Alert.alert('Atenção!', 'Informe a posição ou local a ser lavado.');
          return false;
        }
        if(this.state.NomeSolicitante == null || this.state.NomeSolicitante == "") {
          Alert.alert('Atenção!', 'Informe o nome do solicitante.');
          return false;
        }
        if(this.state.EmpresaSolicitante == null || this.state.EmpresaSolicitante == "") {
          Alert.alert('Atenção!', 'Informe a empresa solicitante.');
          return false;
        }
        if(this.state.Prefixo == null || this.state.Prefixo == "") {
          Alert.alert('Atenção!', 'Informe o prefixo.');
          return false;
        }        
        if(this.state.HoraSolicitacao == null || this.state.HoraSolicitacao == "") {
          Alert.alert('Atenção!', 'Informe a hora da solicitação.');
          return false;
        }
        if(this.state.EmpresaEnvolvida == null || this.state.EmpresaEnvolvida == "") {
          Alert.alert('Atenção!', 'Informe a empresa envolvida.');
          return false;
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
    inputStyle:{
        flex: 2,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        borderBottomColor: 'gray',       
        borderColor: 'black',
        fontSize: 15
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