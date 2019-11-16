import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image,
         Dimensions, TextInput } from 'react-native';
import firebase from "firebase";

var {height, width} = Dimensions.get('window');

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      email: "nathanaelotaku@hotmail.com",
      senha: "123456"
    };
  }
  
  //componentDidMount(){
  //  firebase.auth().onAuthStateChanged(function(user) {
  //    if(user) {
  //      console.log("Current user")
  //      console.log(JSON.stringify(user))
  //      if (user.uid =! null){
  //        () => this.props.navigation.navigate('Menu');
  //      }
  //    } else{
  //      console.log("Current user error");
  //    }
  //  });
  //} 

  render() {   

    return (
      <View style={styles.container}>
        <Image style={{ width: '59%', height: '40%' }} source={require('../imagens/sisaa.png')}/>
        <Text style={styles.titleText}>SISAA</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({email: text})}
          placeholder="Email"
          value={this.state.email}
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({senha: text})}
          placeholder="Senha"
          secureTextEntry
          value={this.state.senha}
        />
        <TouchableOpacity onPress={ () => this.loginUser(this.state.email, this.state.senha)}
         style={styles.loginButton} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.askForgotPassword()} style={styles.forgotButton} >
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    );
  }

  askForgotPassword(){
    if (this.state.email == ""){
      Alert.alert("Erro !", "Você precisa informar o seu e-mail.");
    }
    else {
      Alert.alert(
        'Recuperar Senha',
        'Deseja recuperar a senha do e-mail: ' + this.state.email + ' ?',
        [
          {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () =>
            this.resetPassword()
          },
        ],
        { cancelable: false }
      )
    }
  }  

  resetPassword(){
    const email = this.state.email
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Sucesso !', "Um e-mail de recuperação de senha foi enviado para: "+email);
      })
      .catch((error) => this.resetPasswordFail(error))
  }

  resetPasswordFail(error){
    console.log("Erro ao recuperar senha: "+error)
  }

  loginUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      if(this.state.email == 'nathanaelotaku@hotmail.com' || this.state.email == 'esdrasli@gmail.com' ||
         this.state.email == 'paulo.fagnerdeoliveira@gmail.com') 
      {
        this.props.navigation.navigate('Menu');
      }
      else
      {
        this.props.navigation.navigate('MenuUsuario');
      }
    })
    .catch((err) => {
        if(err.code == 'auth/user-not-found'){
          Alert.alert('Atenção!', 'Usuário sem Acesso.')
        } else {
          Alert.alert('Atenção!', 'Talvez você não tenha acesso a internet.')          
        }
    })    
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  forgotButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center'
  },
  buttonText:{
    color: "white",
    fontSize: 30
  },
  forgotText:{
    color: "blue",
    textDecorationLine: "underline"
  },
  titleText:{
    fontSize: 25,
    alignItems: 'center',
    textAlign: 'center',
    color: "#012060",
  },
  inputStyle:{
    height: height * 0.06, 
    width: width * 0.85, 
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    margin: width * 0.04
  },
  loginButton: {
    backgroundColor: "#001A4D",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center'
  }
});
