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
          //Dados da Aeronave
          MatriculaRegistration: "", ModeloModel: "", MTOW: "", ClasseCAOType: "",
          //Dados da Operação
          DataPouso:"" , PilotoComando: "", Telefone: "", Email: "", VOO_IntrucaoExperiencia: "",
          //Dados do Operador da Aeronave:
          

        };
      }

    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Card style={styles.containercard}>                        
                        <Text style={styles.Titulo}>Dados da Aeronave</Text>
                        <Text style={styles.text}>Matrícula/Registration:</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({MatriculaRegistration: text})}
                        placeholder="Matrícula"
                        value={this.state.MatriculaRegistration}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text}>Modelo/Model:</Text><Text style={styles.textObrig}>*</Text>
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
                        <Text style={styles.text}>Classe/CAO Type:</Text>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({ClasseCAOType: text})}
                        placeholder="Classe"
                        value={this.state.ClasseCAOType}
                        />
                        <Text style={styles.Titulo}>Dados da Operação</Text>
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