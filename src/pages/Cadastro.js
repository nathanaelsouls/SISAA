/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import firebase from "firebase"

var {height, width} = Dimensions.get('window');



export default class SignUp extends React.Component {
    static navigationOptions = {
        title: 'Cadastro De Usuário',
      };

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      nome: "",
      email: "",
      senha: "",
      matricula: ""
    };
  }

  componentDidMount(){
    const { currentUser } = firebase.auth();
    if (currentUser){
      console.log("Estou logado: ", currentUser.uid)
    }
    //Buscar os dados do usuário logado no banco (depois de ter aprendido a fazer push no banco e criar auth)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#001A4D" barStyle="light-content" />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({nome: text})}
          placeholder="Nome"
          value={this.state.nome}
          placeholderTextColor = "#CDC5BF" 
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({email: text})}
          placeholder="Email"
          value={this.state.email}
          placeholderTextColor = "#CDC5BF" 
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({senha: text})}
          placeholder="Senha"
          secureTextEntry
          value={this.state.senha}
          placeholderTextColor = "#CDC5BF" 
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({matricula: text})}
          placeholder="Matricula"
          value={this.state.matricula}
          placeholderTextColor = "#CDC5BF" 
        />
        <TouchableOpacity onPress={()=> this.openAlert()} style={styles.registerButton} >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        </View>
    );
  }

  openAlert(){
    alert('Logo, Logo...!');
  }

  askRegister(){
    Alert.alert(
      'Registrar',
      'Confirma o seu registo?',
      [
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () =>
          this.registerUser(this.state.email, this.state.senha, this.state.nome, this.state.matricula)
        },
      ],
      { cancelable: false }
    )
  }

  registerUser (email, password, nome, matricula) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((currentUser) => {
      firebase.database().ref("Users/"+currentUser.user.uid).update({
        uid: currentUser.user.uid,
        email: email,
        nome: nome,
        matricula: matricula
      });
      Alert.alert("Sucesso!", "Usuário criado");
      Actions.pop();
    })
    .catch((error) => { 
      console.log("firebase error: " + error);
      Alert.alert("Errou no auth!", error.code)
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  registerButton: {
    backgroundColor: "#001A4D",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.9,
    alignItems: 'center'
  },
  buttonText:{
    color: "white",
    fontSize: 35
  },
  inputStyle:{
    height: height * 0.1, 
    width: width * 0.9, 
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    margin: width * 0.04,
    color: "black",
    fontSize: 20
  },
});