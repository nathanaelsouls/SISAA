import React from 'react';
import { StyleSheet, Alert, Text, View, TouchableOpacity,
         StatusBar, Dimensions, Picker, CheckBox, ScrollView,TextInput} from 'react-native';
import { Card } from 'react-native-elements';
import firebase from "firebase";

var {height, width} = Dimensions.get('window');


export default class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      // Padrão
      Fiscal_Patio:   "",  Fiscal_Matricula: "", txtA_empresa:   "", txt_observacao:   "", PickerValue:    "",
      // Caixas de Texto
      TipoEquip:      "", Modelo:         "", Placa:            "", N_Serie:          "", 
      N_ATIV:         "", Validade_ATIV:  "", Contato:          "", Data:             "", TelefoneForm:   "", 
      // Check Box, Uma variavel para cada pergunta
      Certificado_Propriedade:   "", Pintura_Lataria:           "", LogotipoID_Empresa:     "", Pintura_Amarela:   "",
      Pneus:                     "", Extintores:                "", Motor:                  "", Parte_Eletrica:    "",
      Direcao:                   "", Vazamento_OleoCombustivel: "", Lubrificacao_Periodica: "", Mecanica:          "",
      Acessorios:                "", VidracasEspelhoRetrovisor: "", Reboque:                "", Avarias:           "",
      Ruidos:                    "", Giroflex_LuzInterminente:  "", Zebrados:               "", Radiocomunicador:  "",
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
      equip_VERCheck1:    false,   equip_VERCheck2:    false,
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
    //console.log("Dados do usuario", this.state.userData)
    return (
        <ScrollView style={styles.container}>
          <View style={styles.container}>            
            <Card style={styles.containercard}>
                
                <Text style={styles.estiloTexto}>Área Relacionada: Operações, Planejamento Operacional, Segurança Operacional</Text>
                <Picker
                style = {{width:'100%', height:'3%'}}                
                selectedValue={this.state.PickerValue}
                onValueChange={(itemValue, itemIndex) =>  this.setState({PickerValue:itemValue})}
                >
                  <Picker.Item label="Selecione Empresa" value="" fontSize/>
                  <Picker.Item label="Azul"              value="Azul"/>
                  <Picker.Item label="Gol"               value="Gol"/>
                  <Picker.Item label="LATAM"             value="LATAM"/>
                  <Picker.Item label="Proair"            value="Proair"/>
                  <Picker.Item label="Quicklink"         value="Quicklink"/>
                  <Picker.Item label="Swissport"         value="Swissport"/>                  
                </Picker>
                <Text style={styles.textPerguntas}>Data:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({Data: text})} 
                  placeholder="dd/mm/aaaa"
                  value={this.state.Data}
                  underlineColorAndroid='#0000'
                />
                <Text style={styles.textPerguntas}>Tipo de Equipamento:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({TipoEquip: text})} 
                  placeholder="Tipo de Equipamento"
                  value={this.state.TipoEquip}
                  underlineColorAndroid='#0000'
                />
                <Text style={styles.textPerguntas}>Modelo:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({Modelo: text})} 
                  placeholder="Modelo"
                  value={this.state.Modelo}
                  underlineColorAndroid='#0000'
                />
                <Text style={styles.textPerguntas}>Placa:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({Placa: text})} 
                  placeholder="Placa"
                  value={this.state.Placa}
                  underlineColorAndroid='#0000'
                />
                <Text style={styles.textPerguntas}>Número de Série:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({N_Serie: text})} 
                  placeholder="Nº de Série"
                  value={this.state.N_Serie}
                  underlineColorAndroid='#0000'
                />
                <Text style={styles.textPerguntas}>Número ATIV:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({N_ATIV: text})} 
                  placeholder="Nº ATIV"
                  value={this.state.N_ATIV}
                  underlineColorAndroid='#0000'
                />
                <Text style={styles.textPerguntas}>Validade ATIV:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({Validade_ATIV: text})} 
                  placeholder="Validade ATIV"
                  value={this.state.Validade_ATIV}
                  underlineColorAndroid='#0000'
                />
                <Text style={styles.textPerguntas}>Contato:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({Contato: text})} 
                  placeholder="Contato"
                  value={this.state.Contato}
                  underlineColorAndroid='#0000'
                />
                <Text style={styles.textPerguntas}>Telefone:</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={(text) => this.setState({TelefoneForm: text})} 
                  placeholder="Telefone"
                  value={this.state.TelefoneForm}
                  underlineColorAndroid='#0000'
                />                

                <Text style={styles.estiloTexto}>Certificado de Propriedade:</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_CDPCheck1} onChange={()=>this.equip_CDPCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_CDPCheck2} onChange={()=>this.equip_CDPCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Pintura da lataria (limpeza e conservação):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_PDLCheck1} onChange={()=>this.equip_PDLCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_PDLCheck2} onChange={()=>this.equip_PDLCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Logotipo/ Identificação (Alfanumérica) da Empresa (Padrão NBR-8919):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_LIDCheck1} onChange={()=>this.equip_LIDCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_LIDCheck2} onChange={()=>this.equip_LIDCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Pintura Amarela:</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_PIACheck1} onChange={()=>this.equip_PIACheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_PIACheck2} onChange={()=>this.equip_PIACheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Pneus (estado de uso):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_PNECheck1} onChange={()=>this.equip_PNECheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_PNECheck2} onChange={()=>this.equip_PNECheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Extintores (Carga e aspecto de funcionamento):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_EXTCheck1} onChange={()=>this.equip_EXTCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_EXTCheck2} onChange={()=>this.equip_EXTCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Motor (estado de funcionamento):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_MOTCheck1} onChange={()=>this.equip_MOTCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_MOTCheck2} onChange={()=>this.equip_MOTCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Parte Elétrica (buzina, sinaleiros, faróis, etc.):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_PAECheck1} onChange={()=>this.equip_PAECheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_PAECheck2} onChange={()=>this.equip_PAECheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Direção (Folga excessiva, puxando para o lado, etc.):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_DIRCheck1} onChange={()=>this.equip_DIRCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_DIRCheck2} onChange={()=>this.equip_DIRCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Vazamento de oléo e combustíveis:</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_VOCCheck1} onChange={()=>this.equip_VOCCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_VOCCheck2} onChange={()=>this.equip_VOCCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Lubrificação Periódica:</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_LUPCheck1} onChange={()=>this.equip_LUPCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_LUPCheck2} onChange={()=>this.equip_LUPCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Mecânicas (caixa de marcha, freios, embreagem, etc.):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_MECCheck1} onChange={()=>this.equip_MECCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_MECCheck2} onChange={()=>this.equip_MECCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Acessórios:</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_ACECheck1} onChange={()=>this.equip_ACECheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_ACECheck2} onChange={()=>this.equip_ACECheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Vidraças e espelhos retrovisores (estado em geral):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_VETCheck1} onChange={()=>this.equip_VETCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_VETCheck2} onChange={()=>this.equip_VETCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Reboque (toldos, pneus, pintura, etc.):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_REBCheck1} onChange={()=>this.equip_REBCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_REBCheck2} onChange={()=>this.equip_REBCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Avarias (partes: frouxas, faltando, quebradas):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_AVACheck1} onChange={()=>this.equip_AVACheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_AVACheck2} onChange={()=>this.equip_AVACheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>
                
                <Text style={styles.estiloTexto}>Ruídos (níveis suportáveis):</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_RUICheck1} onChange={()=>this.equip_RUICheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_RUICheck2} onChange={()=>this.equip_RUICheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Giroflex ou Luz Intermitente bem visível sobre o veículo, em conformidade:</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_GLICheck1} onChange={()=>this.equip_GLICheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_GLICheck2} onChange={()=>this.equip_GLICheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Zebrados:</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_ZEBCheck1} onChange={()=>this.equip_ZEBCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_ZEBCheck2} onChange={()=>this.equip_ZEBCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>

                <Text style={styles.estiloTexto}>Radiocomunicador:</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <CheckBox value={this.state.equip_RADCheck1} onChange={()=>this.equip_RADCheck1()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Normal</Text>
                  </View>
                  <CheckBox value={this.state.equip_RADCheck2} onChange={()=>this.equip_RADCheck2()}/>
                  <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.estiloTexto}>Irregular</Text>
                  </View>
                </View>
                
                <Text style={styles.estiloTexto}>Outros: Relatar:</Text>
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
    var data = this.state.PickerValue;
    if(data == ""){
      Alert.alert(
        'Atenção', 'Por favor, Selecione a empresa!'
      )
    }else{

      Alert.alert(
        'Registrar',
        'Confirma o registro com os seguintes dados?\nEmpresa: ' + this.state.PickerValue + "\n",
        [
          {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => 
            //this.openAlert()
            this.confirmRegister(this.state.Data,   this.state.userData.nome,             this.state.userData.matricula, this.state.PickerValue,
              this.state.Certificado_Propriedade,   this.state.Pintura_Lataria,           this.state.LogotipoID_Empresa,
              this.state.Pintura_Amarela,           this.state.Pneus,                     this.state.Extintores,
              this.state.Motor,                     this.state.Parte_Eletrica,            this.state.Direcao,
              this.state.Vazamento_OleoCombustivel, this.state.Lubrificacao_Periodica,    this.state.Mecanica,
              this.state.Acessorios,                this.state.VidracasEspelhoRetrovisor, this.state.Reboque,
              this.state.Avarias,                   this.state.Ruidos,                    this.state.Giroflex_LuzInterminente,
              this.state.Zebrados,                  this.state.Radiocomunicador,          this.state.txt_observacao,)
          },
        ],
        { cancelable: false }
      )
    }  
  }
  confirmRegister () {
    const userData = {
      _02_Fiscal_Patio:                   this.state.userData.nome,
      _01_Fiscal_Matricula:               this.state.userData.matricula,
      _03_txtA_empresa:                   this.state.PickerValue,
      _04_Data:                           this.state.Data,
      _05_Certificado_Propriedade:        this.state.Certificado_Propriedade,
      _06_Pintura_Lataria:                this.state.Pintura_Lataria,
      _07_LogotipoID_Empresa:             this.state.LogotipoID_Empresa,
      _08_Pintura_Amarela:                this.state.Pintura_Amarela,
      _09_Pneus:                          this.state.Pneus,
      _10_Extintores:                     this.state.Extintores,
      _11_Motor:                          this.state.Motor,
      _12_Parte_Eletrica:                 this.state.Parte_Eletrica,
      _13_Direcao:                        this.state.Direcao,
      _14_Vazamento_OleoCombustivel:      this.state.Vazamento_OleoCombustivel,
      _15_Lubrificacao_Periodica:         this.state.Lubrificacao_Periodica,
      _16_Mecanica:                       this.state.Mecanica,
      _17_Acessorios:                     this.state.Acessorios,
      _18_VidracasEspelhoRetrovisor:      this.state.VidracasEspelhoRetrovisor,
      _19_Reboque:                        this.state.Reboque,
      _20_Avarias:                        this.state.Avarias,
      _21_Ruidos:                         this.state.Ruidos,
      _22_Giroflex_LuzInterminente:       this.state.Giroflex_LuzInterminente,
      _23_Zebrados:                       this.state.Zebrados,
      _24_Radiocomunicador:               this.state.Radiocomunicador,
      _25_txt_observacao:                 this.state.txt_observacao,
    }
      firebase.database().ref("CheckListEquipVeiculo/").push(userData)
      .then((snapshot) => {
        Alert.alert("Sucesso!", "Check List Enviado");
        this.props.navigation.navigate('Menu');
      })
      .catch((error) =>{
        console.log("Error: ", error);
        Alert.alert("Erro na persistência dos dados!", error.code)
      })      
  }

  equip_CDPCheck1(){
    this.setState({
      equip_CDPCheck1:!this.state.equip_CDPCheck1,
      equip_CDPCheck2: false,
      Certificado_Propriedade: "Normal"
    })
  };
  equip_CDPCheck2(){
    this.setState({
      equip_CDPCheck2:!this.state.equip_CDPCheck2,
      equip_CDPCheck1: false,
      Certificado_Propriedade: "Irregular"
    })
  };
  equip_PDLCheck1(){
    this.setState({
    equip_PDLCheck1:!this.state.equip_PDLCheck1,
    equip_PDLCheck2: false,
    Pintura_Lataria: "Normal" 
    })
  };
  equip_PDLCheck2(){
    this.setState({
    equip_PDLCheck2:!this.state.equip_PDLCheck2,
    equip_PDLCheck1: false,
    Pintura_Lataria: "Irregular"
    })
  };

  equip_LIDCheck1(){
    this.setState({
        equip_LIDCheck1:!this.state.equip_LIDCheck1,
        equip_LIDCheck2: false,
        LogotipoID_Empresa: "Normal"
    })
  };
  equip_LIDCheck2(){
    this.setState({
        equip_LIDCheck2:!this.state.equip_LIDCheck2,
        equip_LIDCheck1: false,
        LogotipoID_Empresa: "Irregular"
    })    
  };
  equip_PIACheck1(){
    this.setState({
      equip_PIACheck1:!this.state.equip_PIACheck1,
      equip_PIACheck2: false,
      Pintura_Amarela: "Normal"
    })
  };
  equip_PIACheck2(){
    this.setState({
      equip_PIACheck2:!this.state.equip_PIACheck2,
      equip_PIACheck1: false,
      Pintura_Amarela: "Irregular"
    })
  };
  equip_PNECheck1(){
    this.setState({
      equip_PNECheck1:!this.state.equip_PNECheck1,
      equip_PNECheck2: false,
      Pneus: "Normal"
    })    
  };
  equip_PNECheck2(){
    this.setState({
      equip_PNECheck2:!this.state.equip_PNECheck2,
      equip_PNECheck1: false,
      Pneus: "Irregular"
    })
  };
  equip_EXTCheck1(){
    this.setState({
      equip_EXTCheck1:!this.state.equip_EXTCheck1,
      equip_EXTCheck2: false,
      Extintores: "Normal"
    })
  };
  equip_EXTCheck2(){
    this.setState({
      equip_EXTCheck2:!this.state.equip_EXTCheck2,
      equip_EXTCheck1: false,
      Extintores: "Irregular"
    })
  };

  equip_MOTCheck1(){
    this.setState({
      equip_MOTCheck1:!this.state.equip_MOTCheck1,
      equip_MOTCheck2: false,
      Motor: "Normal"
    })
  };
  equip_MOTCheck2(){
    this.setState({
      equip_MOTCheck2:!this.state.equip_MOTCheck2,
      equip_MOTCheck1: false,
      Motor: "Irregular"
    })
  };
  equip_PAECheck1(){
    this.setState({
      equip_PAECheck1:!this.state.equip_PAECheck1,
      equip_PAECheck2: false,
      Parte_Eletrica: "Normal"
    })    
  };
  equip_PAECheck2(){
    this.setState({
      equip_PAECheck2:!this.state.equip_PAECheck2,
      equip_PAECheck1: false,
      Parte_Eletrica: "Irregular"
    })
  };
  equip_DIRCheck1(){
    this.setState({
      equip_DIRCheck1:!this.state.equip_DIRCheck1,
      equip_DIRCheck2: false,
      Direcao: "Normal"
    })
  };
  equip_DIRCheck2(){
    this.setState({
      equip_DIRCheck2:!this.state.equip_DIRCheck2,
      equip_DIRCheck1: false,
      Direcao: "Irregular"
    })
  };
  equip_VOCCheck1(){
    this.setState({
      equip_VOCCheck1:!this.state.equip_VOCCheck1,
      equip_VOCCheck2: false,
      Vazamento_OleoCombustivel: "Normal"
    })
  };
  equip_VOCCheck2(){
    this.setState({
      equip_VOCCheck2:!this.state.equip_VOCCheck2,
      equip_VOCCheck1: false,
      Vazamento_OleoCombustivel: "Irregular"
    })
  };
  equip_LUPCheck1(){
    this.setState({
      equip_LUPCheck1:!this.state.equip_LUPCheck1,
      equip_LUPCheck2: false,
      Lubrificacao_Periodica: "Normal"
    })
  };
  equip_LUPCheck2(){
    this.setState({
      equip_LUPCheck2:!this.state.equip_LUPCheck2,
      equip_LUPCheck1: false,
      Lubrificacao_Periodica: "Irregular"
    })
  };
  equip_MECCheck1(){
    this.setState({
      equip_MECCheck1:!this.state.equip_MECCheck1,
      equip_MECCheck2: false,
      Mecanica: "Normal"
    })
  };
  equip_MECCheck2(){
    this.setState({
      equip_MECCheck2:!this.state.equip_MECCheck2,
      equip_MECCheck1: false,
      Mecanica: "Irregular"
    })
  };
  equip_ACECheck1(){
    this.setState({
      equip_ACECheck1:!this.state.equip_ACECheck1,
      equip_ACECheck2: false,
      Acessorios: "Normal"
    })
  };
  equip_ACECheck2(){
    this.setState({
      equip_ACECheck2:!this.state.equip_ACECheck2,
      equip_ACECheck1: false,
      Acessorios: "Irregular"
    })
  };
  equip_VETCheck1(){
    this.setState({
      equip_VETCheck1:!this.state.equip_VETCheck1,
      equip_VETCheck2: false,
      VidracasEspelhoRetrovisor: "Normal"
    })
  };
  equip_VETCheck2(){
    this.setState({
      equip_VETCheck2:!this.state.equip_VETCheck2,
      equip_VETCheck1: false,
      VidracasEspelhoRetrovisor: "Irregular"
    })
  };
  equip_REBCheck1(){
    this.setState({
      equip_REBCheck1:!this.state.equip_REBCheck1,
      equip_REBCheck2: false,
      Reboque: "Normal"
    })
  };
  equip_REBCheck2(){
    this.setState({
      equip_REBCheck2:!this.state.equip_REBCheck2,
      equip_REBCheck1: false,
      Reboque: "Irregular"
    })
  };
  equip_AVACheck1(){
    this.setState({
      equip_AVACheck1:!this.state.equip_AVACheck1,
      equip_AVACheck2: false,
      Avarias: "Normal"
    })
  };
  equip_AVACheck2(){
    this.setState({
      equip_AVACheck2:!this.state.equip_AVACheck2,
      equip_AVACheck1: false,
      Avarias: "Irregular"
    })
  };
  equip_RUICheck1(){
    this.setState({
      equip_RUICheck1:!this.state.equip_RUICheck1,
      equip_RUICheck2: false,
      Ruidos: "Normal"
    })
  };
  equip_RUICheck2(){
    this.setState({
      equip_RUICheck2:!this.state.equip_RUICheck2,
      equip_RUICheck1: false,
      Ruidos: "Irregular"
    })
  };
  equip_GLICheck1(){
    this.setState({
      equip_GLICheck1:!this.state.equip_GLICheck1,
      equip_GLICheck2: false,
      Giroflex_LuzInterminente: "Normal"
    })
  };
  equip_GLICheck2(){
    this.setState({
      equip_GLICheck2:!this.state.equip_GLICheck2,
      equip_GLICheck1: false,
      Giroflex_LuzInterminente: "Irregular"
    })
  };
  equip_ZEBCheck1(){
    this.setState({
      equip_ZEBCheck1:!this.state.equip_ZEBCheck1,
      equip_ZEBCheck2: false,
      Zebrados: "Normal"
    })
  };
  equip_ZEBCheck2(){
    this.setState({
      equip_ZEBCheck2:!this.state.equip_ZEBCheck2,
      equip_ZEBCheck1: false,
      Zebrados: "Irregular"
    })
  };
  equip_RADCheck1(){
    this.setState({
      equip_RADCheck1:!this.state.equip_RADCheck1,
      equip_RADCheck2: false,
      Radiocomunicador: "Normal"
    })
  };
  equip_RADCheck2(){
    this.setState({
      equip_RADCheck2:!this.state.equip_RADCheck2,
      equip_RADCheck1: false,
      Radiocomunicador: "Irregular"
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
    flex: 2,
    width:'90%'
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
  inputStyle:{
    height: height * 0.06, 
    width: width * 0.80, 
    borderColor: 'gray', 
    borderBottomWidth: 1,
    margin: width * 0.02
  },
  buttonText:{
    color: "white",
    fontSize: 25
  },
  registerButton: {
    backgroundColor: "#001A4D",
    borderRadius: 10,
    padding: 10,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textPerguntas: {
    color: 'black',
    alignSelf: 'flex-start',
    fontSize: 15
  },
  estiloTexto:{
    fontSize: 15,
    color: 'black'
  }
});