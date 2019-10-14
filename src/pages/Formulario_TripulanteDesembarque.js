import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

export default class Formulario_TripulanteDesembarque extends React.Component{
    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Card style={styles.containercard}>
                        <Text style={styles.text}>Formulário Tripulante e/ou Desembarque</Text>
                        <Text style={styles.text}>Teste</Text>
                        <Text style={styles.text}>Teste</Text>
                        <Text style={styles.text}>Teste</Text>
                        <Text style={styles.text}>Teste</Text>
                        <Text style={styles.text}>Teste</Text>
                        <Text style={styles.text}>Teste</Text>
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