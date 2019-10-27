import React from 'react';
import { StyleSheet, Text, View, ScrollView,} from 'react-native';
import { Card } from 'react-native-elements';

export default class Colaboradores extends React.Component{
    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    
                    <Text style={styles.Titulo}>Equipe Projeto</Text>

                    <Card style={styles.containercard}>
                        <Text style={{ fontWeight: "bold" }}>Natanael Esdras Lima</Text>
                        <Text>Gerente de Projetos</Text>
                        <Text>E-mail: esdrasli@gmail.com</Text>
                    </Card>
                    <Card style={styles.containercard}>
                        <Text style={{ fontWeight: "bold" }}>Állef Luziano</Text>
                        <Text>Desenvolvedor</Text>
                        <Text>E-mail: allefluziano@gmail.com</Text>
                    </Card>
                    <Card style={styles.containercard}>
                        <Text style={{ fontWeight: "bold" }}>Nathanael Ferreira</Text>
                        <Text>Desenvolvedor</Text>
                        <Text>E-mail: nathanaelotaku28@gmail.com</Text>
                    </Card>
                    <Card style={styles.containercard}>
                        <Text style={{ fontWeight: "bold" }}>Ariele Castro Lucena</Text>
                        <Text>Analista de Sistemas</Text>
                        <Text>E-mail: ariele.lucena@gmail.com</Text>
                    </Card>
                    <Card style={styles.containercard}>
                        <Text style={{ fontWeight: "bold" }}>Thainara Patrícia</Text>
                        <Text>Analista de Sistemas</Text>
                        <Text>E-mail: tainara1921@live.com</Text>
                    </Card>
                    <Card style={styles.containercard}>
                        <Text style={{ fontWeight: "bold" }}>Marco Paulo</Text>
                        <Text>Tester</Text>
                        <Text>E-mail: marco.epr01@gmail.com</Text>
                    </Card>
                    <Card style={styles.containercard}>
                        <Text style={{ fontWeight: "bold" }}>Paulo Fagner</Text>
                        <Text>Tester</Text>
                        <Text>E-mail: paulofagner32@yahoo.com.br</Text>
                    </Card>  
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    Titulo: {
        fontSize: 25,
        color: 'black',
        fontWeight: "bold",
        alignItems: 'center',        
        alignSelf: 'center'
    },
});