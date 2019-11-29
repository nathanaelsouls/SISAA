import React from 'react';
import { StyleSheet, Alert, Text, View, TouchableOpacity,
         Dimensions, Picker, CheckBox, ScrollView,TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import firebase from "firebase";

var {height, width} = Dimensions.get('window');

export default class CheckList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {      
      deviceWidth: width,
      deviceHeight: height,
      Fiscal_Pátio:   "", txtA_empresa:   "", txt_observacao: "", Fiscal_Matricula: "",
      txt_A1_P1_EAD:  "", txt_A1_P2_UFE:  "", date: "",
      txt_A2_P1_DP:   "", txt_A2_P2_PQ:   "", txt_A2_P3_PA:   "", txt_A2_P4_VA:     "",
      txt_A3_P1_UEPC: "", txt_A3_P2_LC:   "", txt_A3_P3_GC:   "", txt_A3_P4_OD:     "", txt_A3_P5_FER: "",
      txt_A4_P1_MD:   "", txt_A4_P2_ID:   "", txt_A4_P3_FED:  "", txt_A4_P4_HD:     "",
      txt_A5_P1_UFC:  "", txt_A5_P2_SUEA: "", PickerValue:    "",
      userData: {      },
      Ac_EADCheck1:    false,   Ac_EADCheck2:    false,
      Ac_UFECheck1:    false,   Ac_UFECheck2:    false,      
      Aqsm_DPCheck1:   false,   Aqsm_DPCheck2:   false,
      Aqsm_PQCheck1:   false,   Aqsm_PQCheck2:   false,
      Aqsm_PACheck1:   false,   Aqsm_PACheck2:   false,
      Aqsm_VACheck1:   false,   Aqsm_VACheck2:   false,
      Agso_UEPCCheck1: false,   Agso_UEPCCheck2: false, 
      Agso_LCCheck1:   false,   Agso_LCCheck2:   false,
      Agso_GCCheck1:   false,   Agso_GCCheck2:   false,
      Agso_ODCheck1:   false,   Agso_ODCheck2:   false,
      Agso_FERCheck1:  false,   Agso_FERCheck2:  false,
      Am_MDCheck1:     false,   Am_MDCheck2:     false,
      Am_IDCheck1:     false,   Am_IDCheck2:     false,
      Am_FEDCheck1:    false,   Am_FEDCheck2:    false,
      Am_HDCheck1:     false,   Am_HDCheck2:     false,
      App_UFCCheck1:   false,   App_UFCCheck2:   false,
      App_SUEACheck1:  false,   App_SUEACheck2:  false,
    };    
  }  
  selectDate = (date) => {
    this.setState({date: date});
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
    return (
        <ScrollView style={styles.container}>
          <View style={styles.container} >
            <Card style={styles.containercard}>              
              <Text style={{color: 'black', alignSelf: 'flex-start', fontSize: 15}}>Confirme a Data pelo o calendário:</Text>
              <DatePicker
                style={{width: 290, marginVertical: 10}}
                date={this.state.date}
                format="DD-MM-YYYY"
                minDate="01-11-2019"
                maxDate="31-12-2020"
                onDateChange={this.selectDate}                                   
              />              
              <Picker
                style = {{width: '100%', fontSize: 25, marginVertical:5}}
                selectedValue={this.state.PickerValue}
                onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}
              >
                <Picker.Item label="Selecione a Empresa..." value=""/>
                <Picker.Item label="Azul"              value="Azul"/>
                <Picker.Item label="Gol"               value="Gol"/>
                <Picker.Item label="LATAM"             value="LATAM"/>
                <Picker.Item label="Proair"            value="Proair"/>
                <Picker.Item label="Quicklink"         value="Quicklink"/>
                <Picker.Item label="Swissport"         value="Swissport"/>
              </Picker>

              <Text style={styles.estiloTexto}>1- Há Equipamentos fora da área delimitada?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Ac_EADCheck1} onChange={()=>this.Ac_EADCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Ac_EADCheck2} onChange={()=>this.Ac_EADCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não   </Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>2- Está Utilizando espaço físico de outra empresa?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <CheckBox value={this.state.Ac_UFECheck1} onChange={()=>this.Ac_UFECheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Ac_UFECheck2} onChange={()=>this.Ac_UFECheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>3- Tem derramamento de produtos químicos, óleo e/ou combustíveis?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Aqsm_DPCheck1} onChange={()=>this.Aqsm_DPCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Aqsm_DPCheck2} onChange={()=>this.Aqsm_DPCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>4- Tem produtos químicos mal acondicionados?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Aqsm_PQCheck1} onChange={()=>this.Aqsm_PQCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto} >Sim</Text>
                </View>
                <CheckBox value={this.state.Aqsm_PQCheck2} onChange={()=>this.Aqsm_PQCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>                  
              </View>
              
              <Text style={styles.estiloTexto}>5- Encontrou presença de animais vivos ou mortos?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Aqsm_PACheck1} onChange={()=>this.Aqsm_PACheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Aqsm_PACheck2} onChange={()=>this.Aqsm_PACheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>6- Encontrou vestigios de alimentos?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Aqsm_VACheck1} onChange={()=>this.Aqsm_VACheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Aqsm_VACheck2} onChange={()=>this.Aqsm_VACheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>7- Utilização de equipamentos que produzem centelha?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Agso_UEPCCheck1} onChange={()=>this.Agso_UEPCCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Agso_UEPCCheck2} onChange={()=>this.Agso_UEPCCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>8- Tem lixo no chão?</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Agso_LCCheck1} onChange={()=>this.Agso_LCCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Agso_LCCheck2} onChange={()=>this.Agso_LCCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
             <Text style={styles.estiloTexto}>9- Encontrou guimbas de cigarro?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Agso_GCCheck1} onChange={()=>this.Agso_GCCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Agso_GCCheck2} onChange={()=>this.Agso_GCCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>10- Econtrou alguma Obstrução na drenagem?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Agso_ODCheck1} onChange={()=>this.Agso_ODCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Agso_ODCheck2} onChange={()=>this.Agso_ODCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View> 
             <Text style={styles.estiloTexto}>11- Tem fiação exposta, gerando algum risco?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Agso_FERCheck1} onChange={()=>this.Agso_FERCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Agso_FERCheck2} onChange={()=>this.Agso_FERCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View> 
             <Text style={styles.estiloTexto}>12- Manutenção diversas(na infraestrutura)?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Am_MDCheck1} onChange={()=>this.Am_MDCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Am_MDCheck2} onChange={()=>this.Am_MDCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View> 
             <Text style={styles.estiloTexto}>13- Iluminação danificada(acima de 2 refletores danificados)?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Am_IDCheck1} onChange={()=>this.Am_IDCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Am_IDCheck2} onChange={()=>this.Am_IDCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
             <Text style={styles.estiloTexto}>14- Fiação elétrica danificada?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Am_FEDCheck1} onChange={()=>this.Am_FEDCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Am_FEDCheck2} onChange={()=>this.Am_FEDCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>                
              
              <Text style={styles.estiloTexto}>15- hidráulica danificada?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.Am_HDCheck1} onChange={()=>this.Am_HDCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.Am_HDCheck2} onChange={()=>this.Am_HDCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
             <Text style={styles.estiloTexto}>16- Uso/falta de colete?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.App_UFCCheck1} onChange={()=>this.App_UFCCheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.App_UFCCheck2} onChange={()=>this.App_UFCCheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>17- Sem uso do EPI apropriado?</Text>
              <View style= {{flex: 1, flexDirection: 'row'}}>
                <CheckBox value={this.state.App_SUEACheck1} onChange={()=>this.App_SUEACheck1()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Sim</Text>
                </View>
                <CheckBox value={this.state.App_SUEACheck2} onChange={()=>this.App_SUEACheck2()}/>
                <View style={{ justifyContent: 'center'}}>
                  <Text style={styles.estiloTexto}>Não</Text>
                </View>
              </View>
              
              <Text style={styles.estiloTexto}>Outros: Relatar</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text1) => this.setState({txt_observacao: text1})}
                placeholder="Observação"
                value={this.state.txt_observacao}
                />
              <TouchableOpacity onPress={()=> this.askRegister()} style={styles.registerButton} >
                <Text style={styles.buttonText}>Enviar CheckList</Text>
              </TouchableOpacity>              
            </Card>              
          </View>
          <Text> </Text>
        </ScrollView>
    );
  }

  openAlert(){
    alert('Check List Enviado com sucesso');
  }

  askRegister(){       
    var validar = this.ValidarCheckBox();
    
    if(validar) {
          Alert.alert(
            'Registrar',
            'Confirma o registro com os seguintes dados?\nEmpresa: ' + this.state.PickerValue + "\n",
            [
              {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => 
                //this.openAlert()
                this.confirmRegister(this.state.date,
                                    this.state.userData.nome,
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

      } else {

      }
    }
  confirmRegister () {
    const userData = {      
      _01_FiscalPatio_Matricula:               this.state.userData.matricula,
      _02_FiscalPatio_Nome:                    this.state.userData.nome,      
      _03_txtA_Empresa:                        this.state.PickerValue,
      _04_Data:                                this.state.date,
      _05_Equipamentos_Local:                  this.state.txt_A1_P1_EAD,
      _06_Utilizando_Espaço_fisico:            this.state.txt_A1_P2_UFE,
      _07_DerramamentoProdutos_Quimicos:       this.state.txt_A2_P1_DP,
      _08_ProdutoQuimicos_MalACondicionados:   this.state.txt_A2_P2_PQ,
      _09_Presença_Animais:                    this.state.txt_A2_P3_PA,
      _10_Vestígios_Alimentos:                 this.state.txt_A2_P4_VA,
      _11_EquipamentosProduzem_Centelha:       this.state.txt_A3_P1_UEPC,
      _12_Lixo_Chão:                           this.state.txt_A3_P2_LC,
      _13_Guimbas_Cigarro:                     this.state.txt_A3_P3_GC,
      _14_Obstrução_Drenagem:                  this.state.txt_A3_P4_OD,
      _15_Fiação_Exposta:                      this.state.txt_A3_P5_FER,
      _16_Manutenção_Diversas:                 this.state.txt_A4_P1_MD,
      _17_Iluminação_Danificada:               this.state.txt_A4_P2_ID,
      _18_FiaçãoElétrica_Danificada:           this.state.txt_A4_P3_FED,
      _19_Hidráulica_Danificada:               this.state.txt_A4_P4_HD,
      _20_Uso_Colete:                          this.state.txt_A5_P1_UFC,
      _21_SemUso_EPI:                          this.state.txt_A5_P2_SUEA,
      _22_Outros_Relatar:                      this.state.txt_observacao
    }
      firebase.database().ref("CheckListAbrigoDeRampa/").push(userData)
      .then((snapshot) => {
        Alert.alert("Sucesso!", "Check List Enviado");
        if(this.state.userData.nome == 'Nathanael' || this.state.userData.nome == 'Natanael' ||
           this.state.userData.nome == 'Paulo Fagner') 
        {
        this.props.navigation.navigate('Menu');
        }
        else
        {
        this.props.navigation.navigate('MenuUsuario');
        }
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
  //Validações de todas as perguntas
  ValidarCheckBox(){        
    if(this.state.date == null || this.state.date == "") {
      Alert.alert('Atenção!', 'Confirme a data no calendário.');
      return false;
    }
    if(this.state.PickerValue == "" || this.state.PickerValue == null) {
      Alert.alert('Atenção!', 'Selecione a empresa!');
      return false;
    }
    if(!this.state.Ac_EADCheck1 & !this.state.Ac_EADCheck2) {
      Alert.alert('Atenção!', '1º pergunta obrigatória.');

      return false;
    }
    if(!this.state.Ac_UFECheck1 & !this.state.Ac_UFECheck2) {
      Alert.alert('Atenção!', '2º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Aqsm_DPCheck1 & !this.state.Aqsm_DPCheck2) {
      Alert.alert('Atenção!', '3º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Aqsm_PQCheck1 & !this.state.Aqsm_PQCheck2) {
      Alert.alert('Atenção!', '4º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Aqsm_PACheck1 & !this.state.Aqsm_PACheck2) {
      Alert.alert('Atenção!', '5º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Aqsm_VACheck1 & !this.state.Aqsm_VACheck2) {
      Alert.alert('Atenção!', '6º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Agso_UEPCCheck1 & !this.state.Agso_UEPCCheck2) {
      Alert.alert('Atenção!', '7º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Agso_LCCheck1 & !this.state.Agso_LCCheck2) {
      Alert.alert('Atenção!', '8º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Agso_GCCheck1 & !this.state.Agso_GCCheck2) {
      Alert.alert('Atenção!', '9º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Agso_ODCheck1 & !this.state.Agso_ODCheck2) {
      Alert.alert('Atenção!', '10º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Agso_FERCheck1 & !this.state.Agso_FERCheck2) {
      Alert.alert('Atenção!', '11º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Am_MDCheck1 & !this.state.Am_MDCheck2) {
      Alert.alert('Atenção!', '12º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Am_IDCheck1 & !this.state.Am_IDCheck2) {
      Alert.alert('Atenção!', '13º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Am_FEDCheck1 & !this.state.Am_FEDCheck2) {
      Alert.alert('Atenção!', '14º pergunta obrigatória.');
      return false;
    }
    if(!this.state.Am_HDCheck1 & !this.state.Am_HDCheck2) {
      Alert.alert('Atenção!', '15º pergunta obrigatória.');
      return false;
    }
    if(!this.state.App_UFCCheck1 & !this.state.App_UFCCheck2) {
      Alert.alert('Atenção!', '16º pergunta obrigatória.');
      return false;
    }
    if(!this.state.App_SUEACheck1 & !this.state.App_SUEACheck2) {
      Alert.alert('Atenção!', '17º pergunta obrigatória.');
      return false;
    }

    return true;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',    
    backgroundColor: '#012060',
  },
  containercard:{
    flex: 2,
    width:'90%',
    margin: 10,
    borderRadius: 1
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
  buttonText:{
    color: "white",
    fontSize: 25
  },
  registerButton: {
    backgroundColor: "#001A4D",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  estiloTexto:{
    fontSize: 15,
    color: 'black'
  },
  inputBox:{
    height: 40, 
    borderWidth: 1,
    backgroundColor: '#FFFAFA',
    borderRadius: 25,
    textAlign: 'center',
    paddingHorizontal: 16,
    marginVertical: 10,
    fontSize: 15
  },
});