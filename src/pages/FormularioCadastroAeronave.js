import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

var {height, width} = Dimensions.get('window');

export default class CadastroAeronave extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          deviceWidth: width,
          deviceHeight: height,
          MatriculaRegistration: "",
          ModeloModel: "",
          MTOW: "",
          ClasseCAOType: ""
        };
      }

    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Card style={styles.containercard}>                        
                        <Text style={styles.Titulo}>Dados da Aeronave:</Text>
                        <Text style={styles.text}>Matrícula/Registration:</Text>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({MatriculaRegistration: text})}
                        placeholder="Matrícula"
                        value={this.state.MatriculaRegistration}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text}>Modelo/Model:</Text><Text style={styles.textObrig}>*</Text>
                        </View>

                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({MatriculaRegistration: text})}
                        placeholder="Matrícula"
                        value={this.state.MatriculaRegistration}
                        />
                        <Text style={styles.text}>MTOW:</Text>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({MatriculaRegistration: text})}
                        placeholder="Matrícula"
                        value={this.state.MatriculaRegistration}
                        />
                        <Text style={styles.text}>Classe/CAO Type:</Text>
                        <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({MatriculaRegistration: text})}
                        placeholder="Matrícula"
                        value={this.state.MatriculaRegistration}
                        />
                        <TouchableOpacity onPress={()=> alert('em Desenvolvimento')} style={styles.FormularioButton} >
                            <Text style={styles.buttonText}>Enviar Formulário</Text>
                        </TouchableOpacity>
                    </Card>                                    
                </View>
                <Text> </Text>
            </ScrollView>
        );
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
        fontSize: 20,
        color: 'black',
        flex: 1,
        alignSelf: 'flex-start',
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