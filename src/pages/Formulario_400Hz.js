import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import firebase from "firebase";
import DatePicker from 'react-native-datepicker';

var {height, width} = Dimensions.get('window');

export default class Formulario_400Hz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          deviceWidth: width,
          deviceHeight: height,
          // Padrão
          Fiscal_Patio:   "",  Fiscal_Matricula: "", date: "",
          //Dados
          MatriculaSoliCIAAerea: "", NomeSoliCIAAerea: "", CIAAerea: "", FiscalAtendimento: "",
          Prefixo:"" , TipoICAOAICRT: "", Categoria: "", DataInicio: "", DataFim: "",
          HoraInicio: "", HoraFim: ""
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
                        <Text style={styles.text}>Matrícula solicitante da CIA Aérea:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({MatriculaSoliCIAAerea: text})}
                        placeholder="Matrícula"
                        value={this.state.MatriculaSoliCIAAerea}
                        />
                        <Text style={styles.text}>Nome solicitante da CIA Aérea:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({NomeSoliCIAAerea: text})}
                        placeholder="Nome"
                        value={this.state.NomeSoliCIAAerea}
                        />
                        <Text style={styles.text}>CIA Aérea:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({CIAAerea: text})}
                        placeholder="CIA Aérea"
                        value={this.state.CIAAerea}
                        />
                        <Text style={styles.text}>Fiscal em atendimento:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({FiscalAtendimento: text})}
                        placeholder="Fiscal em atendimento"
                        value={this.state.FiscalAtendimento}
                        />
                        <Text style={styles.text}>Prefixo:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({Prefixo: text})}
                        placeholder="Prefixo"
                        value={this.state.Prefixo}
                        />
                        <Text style={styles.text}>Tipo ICAO AICRT:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({TipoICAOAICRT: text})}
                        placeholder="Tipo de ICAO AICRT"
                        value={this.state.TipoICAOAICRT}
                        />
                        <Text style={styles.text}>Categoria:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({Categoria: text})}
                        placeholder="Categoria"
                        value={this.state.Categoria}
                        />
                        <Text style={styles.text}>Data Início:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({DataInicio: text})}
                        placeholder="dd/mm/aaaa"
                        value={this.state.DataInicio}
                        />
                        <Text style={styles.text}>Hora Início:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({HoraInicio: text})}
                        placeholder="Formato: 24h"
                        value={this.state.HoraInicio}
                        />
                        <Text style={styles.text}>Data Fim:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({DataFim: text})}
                        placeholder="dd/mm/aaaa"
                        value={this.state.DataFim}
                        />
                        <Text style={styles.text}>Hora Fim:*</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({HoraFim: text})}
                        placeholder="Formato: 24h"
                        value={this.state.HoraFim}
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
            'Confirma Formulário 400 Hz?\nCIA Aérea: ' + this.state.CIAAerea ,
            [
              {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () =>
                this.confirmRegister(this.state.userData.matricula, this.state.userData.nome,     this.state.date,
                  this.state.userData.MatriculaSoliCIAAerea,        this.state.NomeSoliCIAAerea,
                  this.state.CIAAerea,                              this.state.FiscalAtendimento, this.state.Prefixo,
                  this.state.TipoICAOAICRT,                         this.state.Categoria,         this.state.DataInicio,
                  this.state.HoraInicio,                            this.state.DataFim,           this.state.HoraFim)
              },
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
          _04_Matrícula_Solicitante_CIAAerea: this.state.MatriculaSoliCIAAerea,
          _05_Nome_Solicitante_CIAAerea:      this.state.NomeSoliCIAAerea,
          _06_Fiscal_Atendimento:             this.state.FiscalAtendimento,
          _07_Prefixo:                        this.state.Prefixo,
          _08_Tipo_ICAO_AICRT:                this.state.TipoICAOAICRT,
          _09_Categoria:                      this.state.Categoria,
          _10_Data_Inicio:                    this.state.DataInicio,
          _11_Hora_Inicio:                    this.state.HoraInicio,
          _12_Data_Fim:                       this.state.DataFim,
          _13_Hora_Fim:                       this.state.HoraFim    
        }
          firebase.database().ref("DAPE_400Hz/").push(userData)
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
        if(this.state.MatriculaSoliCIAAerea == null || this.state.MatriculaSoliCIAAerea == "") {
          Alert.alert('Atenção!', 'Informe a matrícula solicitante da CIA Aérea.');
          return false;
        }
        if(this.state.NomeSoliCIAAerea == null || this.state.NomeSoliCIAAerea == "") {
          Alert.alert('Atenção!', 'Informe o nome do solicitante da CIA Aérea.');
          return false;
        }
        if(this.state.CIAAerea == null || this.state.CIAAerea == "") {
          Alert.alert('Atenção!', 'Informe a CIA Aérea.');
          return false;
        }
        if(this.state.FiscalAtendimento == null || this.state.FiscalAtendimento == "") {
          Alert.alert('Atenção!', 'Informe o fiscal em atendimento.');
          return false;
        }
        if(this.state.Prefixo == null || this.state.Prefixo == "") {
          Alert.alert('Atenção!', 'Informe o prefixo.');
          return false;
        }        
        if(this.state.TipoICAOAICRT == null || this.state.TipoICAOAICRT == "") {
          Alert.alert('Atenção!', 'Informe o tipo de ICAO AICRT.');
          return false;
        }
        if(this.state.Categoria == null || this.state.Categoria == "") {
          Alert.alert('Atenção!', 'Informe a categoria.');
          return false;
        }
        if(this.state.DataInicio == null || this.state.DataInicio == "") {
          Alert.alert('Atenção!', 'Informe a data de início.');
          return false;
        }
        if(this.state.HoraInicio == null || this.state.HoraInicio == "") {
          Alert.alert('Atenção!', 'Informe a hora de início.');
          return false;
        }
        if(this.state.DataFim == null || this.state.DataFim == "") {
          Alert.alert('Atenção!', 'Informe a data da finalização do serviço.');
          return false;
        }
        if(this.state.HoraFim == null || this.state.HoraFim == "") {
          Alert.alert('Atenção!', 'Informe a hora da finalização do serviço.');
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