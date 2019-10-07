
import React from 'react';

import Routes from './routes'

import firebase from 'firebase';

class App extends React.Component {
    componentWillMount () {
      //Posso Fazer qualquer tipo de configuração global aqui como por exemplo o Firebase
      if (firebase.apps.length === 0) {
        firebase.initializeApp({
          apiKey: "AIzaSyDyO12YhogvbaAFeid9CMBncayDTfrAHgY",
          authDomain: "sisaa-a36e9.firebaseapp.com",
          databaseURL: "https://sisaa-a36e9.firebaseio.com",
          projectId: "sisaa-a36e9",
          storageBucket: "",
          messagingSenderId: "836677340131",
          appId: "1:836677340131:web:d55274b9e3f04d25"
        })
      }
    }
  
    render() {
      return (
        <Routes/>        
      );
    }
  }
  
  export default App;