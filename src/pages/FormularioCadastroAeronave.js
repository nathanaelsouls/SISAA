import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import firebase from "firebase";
import DatePicker from 'react-native-datepicker';

var {height, width} = Dimensions.get('window');

export default class CadastroAeronave extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      // Padrão
      Fiscal_Patio:   "",  Fiscal_Matricula: "", date: "",
      //Dados da Aeronave
      MatriculaRegistration: "", ModeloModel: "", MTOW: "", ClasseCAOType: "",
      //Dados da Operação
      DataPouso:"" , PilotoComando: "", Telefone: "", Email: "", VOO_IntrucaoExperiencia: "",
      //Dados do Operador da Aeronave:
      Nome_RazaoSocial: "", CNPJ_CPF: "", N_AVANAC: "", DataNascimento: "", Endereco: "",
      CEP: "", Cidade: "", Bairro: "", Estado: "", TelefoneOperador: "", EmailOperador: ""
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
            <Text style={styles.Titulo}>Dados da Aeronave</Text>
            <Text style={styles.text}>Matrícula/registration:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({MatriculaRegistration: text})}
            placeholder="Matrícula"
            value={this.state.MatriculaRegistration}
            />           
            <Text style={styles.text}>Modelo/model:</Text>            
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({ModeloModel: text})}
            placeholder="Modelo"
            value={this.state.ModeloModel}
            />
            <Text style={styles.text}>MTOW:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({MTOW: text})}
            placeholder="MTOW"
            value={this.state.MTOW}
            />
            <Text style={styles.text}>Classe/CAO type:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({ClasseCAOType: text})}
            placeholder="Classe"
            value={this.state.ClasseCAOType}
            />
            <Text style={styles.Titulo}>Dados da Operação</Text>
            <Text style={styles.text}>Data de pouso/arrival date:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({DataPouso: text})}
            placeholder="dd/mm/aaaa"
            value={this.state.DataPouso}
            />
            <Text style={styles.text}>Piloto em comando/PIC:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({PilotoComando: text})}
            placeholder="Piloto"
            value={this.state.PilotoComando}
            />
            <Text style={styles.text}>Telefone/Phone:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Telefone: text})}
            placeholder="Telefone"
            value={this.state.Telefone}
            />
            <Text style={styles.text}>E-mail:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Email: text})}
            placeholder="E-mail"
            value={this.state.Email}
            />
            <Text style={styles.text}>Voo de Instrução ou Experiência?</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({VOO_IntrucaoExperiencia: text})}
            placeholder="Instrução ou Experiência"
            value={this.state.VOO_IntrucaoExperiencia}
            />

            <Text style={styles.Titulo}>Dados do Operador da Aeronave</Text>
            <Text style={styles.text}>Nome ou Razão Social:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Nome_RazaoSocial: text})}
            placeholder="Nome ou Razão Social"
            value={this.state.Nome_RazaoSocial}
            />
            <Text style={styles.text}>CNPJ ou CPF:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({CNPJ_CPF: text})}
            placeholder="CNPJ ou CPF"
            value={this.state.CNPJ_CPF}
            />
            <Text style={styles.text}>Se a aeronave for estrangeira insira o número do AVANAC:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({N_AVANAC: text})}
            placeholder="Nº AVANAC"
            value={this.state.N_AVANAC}
            />
            <Text style={styles.text}>Data de nascimento(se for pessoa física):</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({DataNascimento: text})}
            placeholder="dd/mm/aaaa"
            value={this.state.DataNascimento}
            />
            <Text style={styles.text}>Endereço (rua, nº):</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Endereco: text})}
            placeholder="ex: Rua A, nº 2"
            value={this.state.Endereco}
            />
            <Text style={styles.text}>CEP:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({CEP: text})}
            placeholder="CEP"
            value={this.state.Cep}
            />
            <Text style={styles.text}>Estado:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Estado: text})}
            placeholder="Estado"
            value={this.state.Estado}
            />
            <Text style={styles.text}>Cidade:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Cidade: text})}
            placeholder="Cidade"
            value={this.state.Cidade}
            />                        
            <Text style={styles.text}>Bairro:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Bairro: text})}
            placeholder="Bairro"
            value={this.state.Bairro}
            />
            <Text style={styles.text}>Telefone:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Telefone: text})}
            placeholder="Telefone"
            value={this.state.Telefone}
            />
            <Text style={styles.text}>E-mail:</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({Email: text})}
            placeholder="E-mail"
            value={this.state.Email}
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
        'Confirma Cadastro de Aeronave?\nModelo: ' + this.state.ModeloModel + "\n" + "Matrícula: "+
        this.state.MatriculaRegistration + "\n" + "Classe: " + this.state.ClasseCAOType,
        [
          {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () =>
            this.confirmRegister(this.state.date,   this.state.userData.nome, this.state.userData.matricula,
              this.state.userData.MatriculaRegistration,    this.state.ModeloModel,
              this.state.MTOW,                              this.state.ClasseCAOType,               
              this.state.DataPouso,                         this.state.PilotoComando,     this.state.Telefone,
              this.state.Email,                             this.state.VOO_IntrucaoExperiencia,
              this.state.Nome_RazaoSocial,                  this.state.CNPJ_CPF,          this.state.N_AVANAC, 
              this.state.DataNascimento,                    this.state.Endereco,          this.state.CEP,
              this.state.Estado,                            this.state.Cidade,            this.state.Bairro,                   this.state.Ruidos,                    this.state.Giroflex_LuzInterminente,
              this.state.TelefoneOperador,                  this.state.EmailOperador,)
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
      _04_Matrícula_Aeronave:             this.state.MatriculaRegistration,
      _05_Modelo_Aeronave:                this.state.ModeloModel,
      _06_MTOW_Aeronave:                  this.state.MTOW,
      _07_Classe_Aeronave:                this.state.ClasseCAOType,
      _08_DataPouso_Operacao:             this.state.DataPouso,
      _09_PilotoComando_Operacao:         this.state.PilotoComando,
      _10_Telefone_Operacao:              this.state.Telefone,
      _11_Email_Operacao:                 this.state.Email,
      _12_VooInstrucExperienc_Operacao:   this.state.VOO_IntrucaoExperiencia,
      _13_Nome_RazaoSocial_Operador:      this.state.Nome_RazaoSocial,
      _14_CNPJ_CPF_Operador:              this.state.CNPJ_CPF,
      _15_N_AVANAC_Operador:              this.state.N_AVANAC,
      _16_DataNascimento_Operador:        this.state.DataNascimento,
      _17_Endereco_Operador:              this.state.Endereco,
      _18_CEP_Operador:                   this.state.CEP,
      _19_Cidade_Operador:                this.state.Cidade,
      _20_Estado_Operador:                this.state.Estado,
      _21_Bairro_Operador:                this.state.Bairro,
      _22_Telefone_Operador:              this.state.TelefoneOperador,
      _23_Email_Operador:                 this.state.EmailOperador,
    }
      firebase.database().ref("CadastroAeronave/").push(userData)
      .then((snapshot) => {
        Alert.alert("Sucesso!", "Check List Enviado");
        if(this.state.userData.nome == 'Nathanael' || this.state.userData.nome == 'Natanael' ||
            this.state.userData.nome == 'Paulo Fagner') 
        {
        this.props.navigation.navigate('Menu');
        }
        else
        {
        this.props.navigation.navigate('MenuUsuario');
        }
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
    if(this.state.MatriculaRegistration == null || this.state.MatriculaRegistration == "") {
      Alert.alert('Atenção!', 'Informe a matrícula da Aeronave.');
      return false;
    }
    if(this.state.ModeloModel == null || this.state.ModeloModel == "") {
      Alert.alert('Atenção!', 'Informe o modelo da Aeronave.');
      return false;
    }
    if(this.state.MTOW == null || this.state.MTOW == "") {
      Alert.alert('Atenção!', 'Informe o MTOW da Aeronave.');
      return false;
    }
    if(this.state.ClasseCAOType == null || this.state.ClasseCAOType == "") {
      Alert.alert('Atenção!', 'Informe a classe da Aeronave.');
      return false;
    }
    if(this.state.DataPouso == null || this.state.DataPouso == "") {
      Alert.alert('Atenção!', 'Informe a data de pouso da Operação.');
      return false;
    }
    if(this.state.PilotoComando == null || this.state.PilotoComando == "") {
      Alert.alert('Atenção!', 'Informe o piloto em comando da Operação.');
      return false;
    }
    if(this.state.Telefone == null || this.state.Telefone == "") {
      Alert.alert('Atenção!', 'Informe o número de telefone nos dados da Operação.');
      return false;
    }
    if(this.state.Email == null || this.state.Email == "") {
      Alert.alert('Atenção!', 'Informe o e-mail nos dados da Operação.');
      return false;
    }
    if(this.state.VOO_IntrucaoExperiencia == null || this.state.VOO_IntrucaoExperiencia == "") {
      Alert.alert('Atenção!', 'Informe o tipo do voo nos dados da Operação.');
      return false;
    }
    if(this.state.Nome_RazaoSocial == null || this.state.Nome_RazaoSocial == "") {
      Alert.alert('Atenção!', 'Informe o nome ou razão social do Operador da Aeronave.');
      return false;
    }
    if(this.state.CNPJ_CPF == null || this.state.CNPJ_CPF == "") {
      Alert.alert('Atenção!', 'Informe o CNPJ ou CPF do Operador da Aeronave.');
      return false;
    }
    if(this.state.DataNascimento == null || this.state.DataNascimento == "") {
      Alert.alert('Atenção!', 'Informe a data de nascimento do Operador da Aeronave.');
      return false;
    }
    if(this.state.Endereco == null || this.state.Endereco == "") {
      Alert.alert('Atenção!', 'Informe o endereço do Operador da Aeronave.');
      return false;
    }
    if(this.state.CEP == null || this.state.Cep == "") {
      Alert.alert('Atenção!', 'Informe o cep do Operador da Aeronave.');
      return false;
    }
    if(this.state.Estado == null || this.state.Estado == "") {
      Alert.alert('Atenção!', 'Informe o estado do Operador da Aeronave.');
      return false;
    }
    if(this.state.Cidade == null || this.state.Cidade == "") {
      Alert.alert('Atenção!', 'Informe a cidade do Operador da Aeronave.');
      return false;
    }
    if(this.state.Bairro == null || this.state.Bairro == "") {
      Alert.alert('Atenção!', 'Informe o bairro do Operador da Aeronave.');
      return false;
    }
    if(this.state.TelefoneOperador == null || this.state.TelefoneOperador == "") {
      Alert.alert('Atenção!', 'Informe o telefone do Operador da Aeronave.');
      return false;
    }
    if(this.state.EmailOperador == null || this.state.EmailOperador == "") {
      Alert.alert('Atenção!', 'Informe o e-mail do Operador da Aeronave.');
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
  textObrig:{
    color: 'red'
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