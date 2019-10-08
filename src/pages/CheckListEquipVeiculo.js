import React from 'react';
import { StyleSheet, Alert, Text, View, TouchableOpacity,
         StatusBar, Dimensions, Picker, CheckBox, ScrollView,TextInput} from 'react-native';
import { Card } from 'react-native-elements';
import firebase from "firebase";

var {height, width} = Dimensions.get('window');


export default class CheckList extends React.Component {
    static navigationOptions = {
        title: 'Equipamento e Veículo',
      };

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      Fiscal_Pátio:   "", txtA_empresa:   "", txt_observacao: "", Fiscal_Matricula: "",
      txt_A1_P1_EAD:  "", txt_A1_P2_UFE:  "",
      txt_A2_P1_DP:   "", txt_A2_P2_PQ:   "", txt_A2_P3_PA:   "", txt_A2_P4_VA:     "",
      txt_A3_P1_UEPC: "", txt_A3_P2_LC:   "", txt_A3_P3_GC:   "", txt_A3_P4_OD:     "", txt_A3_P5_FER: "",
      txt_A4_P1_MD:   "", txt_A4_P2_ID:   "", txt_A4_P3_FED:  "", txt_A4_P4_HD:     "",
      txt_A5_P1_UFC:  "", txt_A5_P2_SUEA: "", PickerValue:    '',
      userData: {      },
      equip_CDPCheck1:    false,   equip_CDPCheck2:    false,
      equip_PDLCheck1:    false,   equip_PDLCheck2:    false,
      equip_LIDCheck1:    false,   equip_LIDCheck2:    false,
      equip_PIACheck1:    false,   equip_PIACheck2:    false,
      equip_PNECheck1:    false,   equip_PNECheck2:    false,
      equip_EXTCheck1:    false,   equip_EXTCheck2:    false,
      equip_MOTCheck1:    false,   equip_MOTCheck2:    false,
      equip_PAECheck1:    false,   equip_PAECheck2:    false,
      equip_DIRCheck1:    false,   equip_DIRCheck2:    false,
      equip_VOCCheck1:    false,   equip_VOCCheck2:    false,
      equip_LUPCheck1:    false,   equip_LUPCheck2:    false,
      equip_MECCheck1:    false,   equip_MECCheck2:    false,
      equip_ACECheck1:    false,   equip_ACECheck2:    false,
      equip_VETCheck1:    false,   equip_VETCheck2:    false,
      equip_REBCheck1:    false,   equip_REBCheck2:    false,
      equip_AVACheck1:    false,   equip_AVACheck2:    false,
      equip_RUICheck1:    false,   equip_RUICheck2:    false,
      equip_GLICheck1:    false,   equip_GLICheck2:    false,
      equip_ZEBCheck1:    false,   equip_ZEBCheck2:    false,
      equip_RADCheck1:    false,   equip_RADCheck2:    false,
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
  applyMask(value){
    this.maskTEL(value).then(masked => {
        let userData = this.state.userData;
        userData.telefone = masked;
        this.setState({
            userData: userData
        })
    })
  }

  render() {
    console.log("Dados do usuario", this.state.userData)
    return (
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor="#001A4D" barStyle="light-content" />
            
            <Card style={styles.containercard}>
                
                <Picker
                style = {{width:'100%'}}
                selectedValue={this.state.PickerValue}
                onValueChange={(itemValue, itemIndex) =>  this.setState({PickerValue:itemValue})}
                >
                  <Picker.Item label="Selecione Empresa" value=""/>
                  <Picker.Item label="Azul"              value="Azul"/>
                  <Picker.Item label="Gol"               value="Gol"/>
                  <Picker.Item label="LATAM"             value="LATAM"/>
                  <Picker.Item label="Proair"            value="Proair"/>
                  <Picker.Item label="Quicklink"         value="Quicklink"/>
                  <Picker.Item label="Swissport"         value="Swissport"/>                  
                </Picker>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Tipo de Equipamento"
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Modelo"
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Placa"
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="N° de Série"
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="N° ATIV"
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Validade ATIV"
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Contato"
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Telefone"
                />

                <Text style={styles.estiloTexto}> Certificado de Propriedade</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_CDPCheck1} onChange={()=>this.equip_CDPCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_CDPCheck2} onChange={()=>this.equip_CDPCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Pintura da lataria (limpeza e conservação)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_PDLCheck1} onChange={()=>this.equip_PDLCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_PDLCheck2} onChange={()=>this.equip_PDLCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Logotipo/ Identificação (Alfanumérica)</Text>
                <Text style={styles.estiloTexto}> da Empresa (Padrão NBR-8919)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_LIDCheck1} onChange={()=>this.equip_LIDCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_LIDCheck2} onChange={()=>this.equip_LIDCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Pintura Amarela</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_PIACheck1} onChange={()=>this.equip_PIACheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_PIACheck2} onChange={()=>this.equip_PIACheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Pneus (estado de uso)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_PNECheck1} onChange={()=>this.equip_PNECheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_PNECheck2} onChange={()=>this.equip_PNECheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Extintores (Carga e aspecto de funcionamento)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_EXTCheck1} onChange={()=>this.equip_EXTCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_EXTCheck2} onChange={()=>this.equip_EXTCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Motor (estado de funcionamento)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_MOTCheck1} onChange={()=>this.equip_MOTCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_MOTCheck2} onChange={()=>this.equip_MOTCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Parte Elétrica (buzina, sinaleiros, faróis, etc.)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_PAECheck1} onChange={()=>this.equip_PAECheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_PAECheck2} onChange={()=>this.equip_PAECheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Direção (Folga excessiva, puxando para o lado, etc.)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_DIRCheck1} onChange={()=>this.equip_DIRCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_DIRCheck2} onChange={()=>this.equip_DIRCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Vazamento de oléo e combustíveis</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_VOCCheck1} onChange={()=>this.equip_VOCCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_VOCCheck2} onChange={()=>this.equip_VOCCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Lubificação Periódica</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_LUPCheck1} onChange={()=>this.equip_LUPCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_LUPCheck2} onChange={()=>this.equip_LUPCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Mecânicas (caixa de marcha, freios, embreagem, etc.)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_MECCheck1} onChange={()=>this.equip_MECCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_MECCheck2} onChange={()=>this.equip_MECCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Acessórios</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_ACECheck1} onChange={()=>this.equip_ACECheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_ACECheck2} onChange={()=>this.equip_ACECheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Vidraças e espelhos retrovisores (estado em geral)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_VETCheck1} onChange={()=>this.equip_VETCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_VETCheck2} onChange={()=>this.equip_VETCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Reboque (toldos, pneus, pintura, etc.)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_REBCheck1} onChange={()=>this.equip_REBCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_REBCheck2} onChange={()=>this.equip_REBCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Avarias (partes: frouxas, faltando, quebradas)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_AVACheck1} onChange={()=>this.equip_AVACheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_AVACheck2} onChange={()=>this.equip_AVACheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>
                
                <Text style={styles.estiloTexto}> Ruídos (níveis suportáveis)</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_RUICheck1} onChange={()=>this.equip_RUICheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_RUICheck2} onChange={()=>this.equip_RUICheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Giroflex ou Luz Intermitente bem visível</Text>
                <Text style={styles.estiloTexto}> sobre o veículo, em conformidade</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_GLICheck1} onChange={()=>this.equip_GLICheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_GLICheck2} onChange={()=>this.equip_GLICheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Zebrados</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_ZEBCheck1} onChange={()=>this.equip_ZEBCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_ZEBCheck2} onChange={()=>this.equip_ZEBCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}> Radiocomunicador</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_RADCheck1} onChange={()=>this.equip_RADCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_RADCheck2} onChange={()=>this.equip_RADCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}> Irregular</Text>
                  </View>
                </View>
                
                <Text style={styles.estiloTexto}>Outros: Relatar</Text>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(text1) => this.setState({txt_observacao: text1})}
                  placeholder="Observação"
                  value={this.state.txt_observacao}
                  />
                <TouchableOpacity onPress={()=> this.askRegister()} style={styles.registerButton} >
                  <Text style={styles.buttonText}>Enviar CheckList</Text>
                </TouchableOpacity>
              </Card>
              
          </View>
        </ScrollView>
    );
  }

  openAlert(){
    alert('Check List Enviado com sucesso');
  }

  askRegister(){

    var data = this.state.PickerValue;
    if(data == ""){
      Alert.alert(
        'ERRO', 'Selecione a empresa!!!'
      )
    }else{

      Alert.alert(
        'Registrar',
        'Confirma o registro com os seguintes dados?\nEmpresa: ' + this.state.PickerValue + "\n",
        [
          {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => 
            //this.openAlert()
            this.confirmRegister(this.state.userData.nome,
                                this.state.userData.matricula,
                                this.state.PickerValue,
                                this.state.txt_A1_P1_EAD,
                                this.state.txt_A1_P2_UFE,
                                this.state.txt_A2_P1_DP,
                                this.state.txt_A2_P2_PQ,
                                this.state.txt_A2_P3_PA,
                                this.state.txt_A2_P4_VA,
                                this.state.txt_A3_P1_UEPC,
                                this.state.txt_A3_P2_LC,
                                this.state.txt_A3_P3_GC,
                                this.state.txt_A3_P4_OD,
                                this.state.txt_A3_P5_FER,
                                this.state.txt_A4_P1_MD,
                                this.state.txt_A4_P2_ID,
                                this.state.txt_A4_P3_FED,
                                this.state.txt_A4_P4_HD,
                                this.state.txt_A5_P1_UFC,
                                this.state.txt_A5_P2_SUEA,
                                this.state.txt_observacao,)
          },
        ],
        { cancelable: false }
      )
    }  
  }
  confirmRegister () {
    const userData = {
      Fiscal_Pátio:   this.state.userData.nome,
      Fiscal_Matricula: this.state.userData.matricula,
      txtA_empresa:   this.state.PickerValue,
      txt_A1_P1_EAD:  this.state.txt_A1_P1_EAD,
      txt_A1_P2_UFE:  this.state.txt_A1_P2_UFE,
      txt_A2_P1_DP:   this.state.txt_A2_P1_DP,
      txt_A2_P2_PQ:   this.state.txt_A2_P2_PQ,
      txt_A2_P3_PA:   this.state.txt_A2_P3_PA,
      txt_A2_P4_VA:   this.state.txt_A2_P4_VA,
      txt_A3_P1_UEPC: this.state.txt_A3_P1_UEPC,
      txt_A3_P2_LC:   this.state.txt_A3_P2_LC,
      txt_A3_P3_GC:   this.state.txt_A3_P3_GC,
      txt_A3_P4_OD:   this.state.txt_A3_P4_OD,
      txt_A3_P5_FER:  this.state.txt_A3_P5_FER,
      txt_A4_P1_MD:   this.state.txt_A4_P1_MD,
      txt_A4_P2_ID:   this.state.txt_A4_P2_ID,
      txt_A4_P3_FED:  this.state.txt_A4_P3_FED,
      txt_A4_P4_HD:   this.state.txt_A4_P4_HD,
      txt_A5_P1_UFC:  this.state.txt_A5_P1_UFC,
      txt_A5_P2_SUEA: this.state.txt_A5_P2_SUEA,
      txt_observacao: this.state.txt_observacao
    }
      firebase.database().ref("CheckListAbrigoDeRampa/").push(userData)
      .then((snapshot) => {
        Alert.alert("Sucesso!", "Check List Enviado");
        this.props.navigation.navigate('AbrigoRampa');
      })
      .catch((error) =>{
        console.log("Error: ", error);
        Alert.alert("Errou na persistência!", error.code)
      })      
  }

  Ac_EADCheck1(){
    this.setState({
      Ac_EADCheck1:!this.state.Ac_EADCheck1,
      Ac_EADCheck2: false,
      txt_A1_P1_EAD: "Sim" 
    })
  };
  Ac_EADCheck2(){
    this.setState({
      Ac_EADCheck2:!this.state.Ac_EADCheck2,
      Ac_EADCheck1: false,
      txt_A1_P1_EAD: "Não"
    })
  };
  Ac_UFECheck1(){
    this.setState({
    Ac_UFECheck1:!this.state.Ac_UFECheck1,
    Ac_UFECheck2: false,
    txt_A1_P2_UFE: "Sim" 
    })
  };
  Ac_UFECheck2(){
    this.setState({
    Ac_UFECheck2:!this.state.Ac_UFECheck2,
    Ac_UFECheck1: false,
    txt_A1_P2_UFE: "Não"
    })
  };

  Aqsm_DPCheck1(){
    this.setState({
        Aqsm_DPCheck1:!this.state.Aqsm_DPCheck1,
        Aqsm_DPCheck2: false,
        txt_A2_P1_DP: "Sim"
    })
  };
  Aqsm_DPCheck2(){
    this.setState({
        Aqsm_DPCheck2:!this.state.Aqsm_DPCheck2,
        Aqsm_DPCheck1: false,
        txt_A2_P1_DP: "Não"
    })    
  };
  Aqsm_PQCheck1(){
    this.setState({
      Aqsm_PQCheck1:!this.state.Aqsm_PQCheck1,
      Aqsm_PQCheck2: false,
      txt_A2_P2_PQ: "Sim"
    })
  };
  Aqsm_PQCheck2(){
    this.setState({
      Aqsm_PQCheck2:!this.state.Aqsm_PQCheck2,
      Aqsm_PQCheck1: false,
      txt_A2_P2_PQ: "Não"
    })
  };
  Aqsm_PACheck1(){
    this.setState({
      Aqsm_PACheck1:!this.state.Aqsm_PACheck1,
      Aqsm_PACheck2: false,
      txt_A2_P3_PA: "Sim"
    })    
  };
  Aqsm_PACheck2(){
    this.setState({
      Aqsm_PACheck2:!this.state.Aqsm_PACheck2,
      Aqsm_PACheck1: false,
      txt_A2_P3_PA: "Não"
    })
  };
  Aqsm_VACheck1(){
    this.setState({
      Aqsm_VACheck1:!this.state.Aqsm_VACheck1,
      Aqsm_VACheck2: false,
      txt_A2_P4_VA: "Sim"
    })
  };
  Aqsm_VACheck2(){
    this.setState({
        Aqsm_VACheck2:!this.state.Aqsm_VACheck2,
        Aqsm_VACheck1: false,
        txt_A2_P4_VA: "Não"
    })
  };

  Agso_UEPCCheck1(){
    this.setState({
      Agso_UEPCCheck1:!this.state.Agso_UEPCCheck1,
      Agso_UEPCCheck2: false,
      txt_A3_P1_UEPC: "Sim"
    })
  };
  Agso_UEPCCheck2(){
    this.setState({
      Agso_UEPCCheck2:!this.state.Agso_UEPCCheck2,
      Agso_UEPCCheck1: false,
      txt_A3_P1_UEPC: "Não"
    })
  };
  Agso_LCCheck1(){
    this.setState({
      Agso_LCCheck1:!this.state.Agso_LCCheck1,
      Agso_LCCheck2: false,
      txt_A3_P2_LC: "Sim"
    })    
  };
  Agso_LCCheck2(){
    this.setState({
      Agso_LCCheck2:!this.state.Agso_LCCheck2,
      Agso_LCCheck1: false,
      txt_A3_P2_LC: "Não"
    })
  };
  Agso_GCCheck1(){
    this.setState({
      Agso_GCCheck1:!this.state.Agso_GCCheck1,
      Agso_GCCheck2: false,
      txt_A3_P3_GC: "Sim"
    })
  };
  Agso_GCCheck2(){
    this.setState({
      Agso_GCCheck2:!this.state.Agso_GCCheck2,
      Agso_GCCheck1: false,
      txt_A3_P3_GC: "Não"
    })
  };
  Agso_ODCheck1(){
    this.setState({
      Agso_ODCheck1:!this.state.Agso_ODCheck1,
      Agso_ODCheck2: false,
      txt_A3_P4_OD: "Sim"
    })
  };
  Agso_ODCheck2(){
    this.setState({
      Agso_ODCheck2:!this.state.Agso_ODCheck2,
      Agso_ODCheck1: false,
      txt_A3_P4_OD: "Não"
    })
  };
  Agso_FERCheck1(){
    this.setState({
      Agso_FERCheck1:!this.state.Agso_FERCheck1,
      Agso_FERCheck2: false,
      txt_A3_P5_FER: "Sim"
    })
  };
  Agso_FERCheck2(){
    this.setState({
      Agso_FERCheck2:!this.state.Agso_FERCheck2,
      Agso_FERCheck1: false,
      txt_A3_P5_FER: "Não"
    })
  };
  Am_MDCheck1(){
    this.setState({
      Am_MDCheck1:!this.state.Am_MDCheck1,
      Am_MDCheck2: false,
      txt_A4_P1_MD: "Sim"
    })
  };
  Am_MDCheck2(){
    this.setState({
      Am_MDCheck2:!this.state.Am_MDCheck2,
      Am_MDCheck1: false,
      txt_A4_P1_MD: "Não"
    })
  };
  Am_IDCheck1(){
    this.setState({
      Am_IDCheck1:!this.state.Am_IDCheck1,
      Am_IDCheck2: false,
      txt_A4_P2_ID: "Sim"
    })
  };
  Am_IDCheck2(){
    this.setState({
      Am_IDCheck2:!this.state.Am_IDCheck2,
      Am_IDCheck1: false,
      txt_A4_P2_ID: "Não"
    })
  };
  Am_FEDCheck1(){
    this.setState({
      Am_FEDCheck1:!this.state.Am_FEDCheck1,
      Am_FEDCheck2: false,
      txt_A4_P3_FED: "Sim"
    })
  };
  Am_FEDCheck2(){
    this.setState({
      Am_FEDCheck2:!this.state.Am_FEDCheck2,
      Am_FEDCheck1: false,
      txt_A4_P3_FED: "Não"
    })
  };
  Am_HDCheck1(){
    this.setState({
      Am_HDCheck1:!this.state.Am_HDCheck1,
      Am_HDCheck2: false,
      txt_A4_P4_HD: "Sim"
    })
  };
  Am_HDCheck2(){
    this.setState({
      Am_HDCheck2:!this.state.Am_HDCheck2,
      Am_HDCheck1: false,
      txt_A4_P4_HD: "Não"
    })
  };
  App_UFCCheck1(){
    this.setState({
      App_UFCCheck1:!this.state.App_UFCCheck1,
      App_UFCCheck2: false,
      txt_A5_P1_UFC: "Sim"
    })
  };
  App_UFCCheck2(){
    this.setState({
      App_UFCCheck2:!this.state.App_UFCCheck2,
      App_UFCCheck1: false,
      txt_A5_P1_UFC: "Não"
    })
  };
  App_SUEACheck1(){
    this.setState({
      App_SUEACheck1:!this.state.App_SUEACheck1,
      App_SUEACheck2: false,
      txt_A5_P2_SUEA: "Sim"
    })
  };
  App_SUEACheck2(){
    this.setState({
      App_SUEACheck2:!this.state.App_SUEACheck2,
      App_SUEACheck1: false,
      txt_A5_P2_SUEA: "Não"
    })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',    
    backgroundColor: '#012060'
  },
  containercard:{
    flex: 1,
    width:'100%'
  },
  inputStyle:{
    height: height * 0.06, 
    width: width * 0.80, 
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    margin: width * 0.04
  },
  buttonText:{
    color: "white",
    fontSize: 25
  },
  registerButton: {
    backgroundColor: "#001A4D",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
});