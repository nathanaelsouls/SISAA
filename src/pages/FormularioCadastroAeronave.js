import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import firebase from "firebase";

var {height, width} = Dimensions.get('window');

export default class CadastroAeronave extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          deviceWidth: width,
          deviceHeight: height,
          // Padrão
          Fiscal_Patio:   "",  Fiscal_Matricula: "", Data: "",
          //Dados da Aeronave
          MatriculaRegistration: "", ModeloModel: "", MTOW: "", ClasseCAOType: "",
          //Dados da Operação
          DataPouso:"" , PilotoComando: "", Telefone: "", Email: "", VOO_IntrucaoExperiencia: "",
          //Dados do Operador da Aeronave:
          Nome_RazaoSocial: "", CNPJ_CPF: "", N_AVANAC: "", DataNascimento: "", Endereco: "",
          CEP: "", Cidade: "", Bairro: "", Estado: "", TelefoneOperador: "", EmailOperador: ""
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
                        <Text style={styles.text}>Favor informar a Data Atual:</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({Data: text})}
                        placeholder="dd/mm/aaaa"
                        value={this.state.Data}
                        />
                        <Text style={styles.Titulo}>Dados da Aeronave</Text>
                        <Text style={styles.text}>Matrícula/registration:</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({MatriculaRegistration: text})}
                        placeholder="Matrícula"
                        value={this.state.MatriculaRegistration}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text}>Modelo/model:</Text>
                        </View>
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
        var DataVerifica = this.state.Data;
        if(DataVerifica == ""){
          Alert.alert(
            'Atenção', 'Por favor, Informe a Data Atual!'
          )
        }else{    
          Alert.alert(
            'Registrar',
            'Confirma Cadastro de Aeronave?\nModelo: ' + this.state.ModeloModel + "\n" + "Matrícula: "+
            this.state.MatriculaRegistration + "\n" + "Classe: " + this.state.ClasseCAOType,
            [
              {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () =>
                this.confirmRegister(this.state.Data,   this.state.userData.nome, this.state.userData.matricula,
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
          _03_Data_Cadastro_Formulario:       this.state.Data,
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
            this.props.navigation.navigate('Menu');
          })
          .catch((error) =>{
            console.log("Error: ", error);
            Alert.alert("Erro na persistência dos dados!", error.code)
          })      
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