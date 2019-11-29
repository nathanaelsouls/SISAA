import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';

var {height, width} = Dimensions.get('window');

export default class Sisaa extends React.Component{
    render() {
        return(            
            <View style={styles.container}>                
                <Text style={styles.Titulo}>Sisaa o que é?</Text>                
                    <Text style={styles.objective}>{`O Sistema Integrado de Soluções Aeroportuárias Airside, tem como objetivo prover as melhores aplicações para automatizar todo o processo no lado operacional dos aeroportos.\n\nCom este aplicativo os fiscais de pátio poderão realizar os checklist's e cadastros de formulários de uma maneira mais simples e prática.`}</Text>

                <View style={{width: '100%', height: '10%', flexDirection: 'row', justifyContent: 'space-around',
                alignItems: 'center'}}>
                    <Text style={{alignItems: 'flex-start', color: 'black', fontWeight: 'bold', fontSize: 20,}}> Colaboradores: </Text>
                    <TouchableOpacity style={{backgroundColor: "transparente", justifyContent: 'center',
                    width: '25%', height: '161%', alignItems: 'flex-start'}} onPress={() => this.props.navigation.navigate('Colaboradores')} >
                        <Image style={{ width: '45%', height: '45%' }} source={require('../imagens/user.png')}/>
                    </TouchableOpacity>
                </View>

                

            </View>                
        
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#fff",
      },
    containercard:{
        flex: 2,
        width: '90%',
        margin: 8
    },
    Titulo: {
        fontSize: 25,
        color: 'black',
        flex: 1,
        alignSelf: 'center',
        fontWeight: "bold",
    },
    text: {
        fontSize: 20,
        color: 'black',
        flex: 1,
        alignSelf: 'flex-start',
    },
    objective: {
        fontSize: 20,
        height: 400,
        textAlign: 'center'
    }
})