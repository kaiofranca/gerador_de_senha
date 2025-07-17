import { useState } from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { ModalPassword } from "../../components/modal"
import { Checkbox } from 'react-native-paper'

export function Home(){
  const [size, setSize] = useState(10)
  const [senhaValue, setSenhaValue] = useState('')
  const [modalVisivel, setModalVisivel] = useState(false)

  //Checkbox para alterar força da senha
  const [checkSpecial, setCheckSpecial] = useState(false)
  const [checkCaps, setCheckCaps] = useState(false)

  const gerarSenha = () => {
    let charSet = letrasMinusculas + numeros
    let senha = ""

    if (checkSpecial){
      charSet += caracteresEspeciais
    }

    if (checkCaps){
      charSet += letrasMaiusculas
    }

    for (let i=0, n=charSet.length; i<size; i++){
      senha += charSet.charAt(Math.floor(Math.random() * n))
    }
    setSenhaValue(senha)

    setModalVisivel(true)
  }

  const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const caracteresEspeciais = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  return(
    <View style={style.container}>
      <Image 
          source={require("../../assets/logo.png")}
          style={style.logo}
      />

      <Text style={style.title}>{size} caracteres</Text>

      <View style={style.area}>
          <Slider 
              style={{height: 50}} 
              minimumValue={6} 
              maximumValue={20} 
              maximumTrackTintColor="#ecae31" 
              minimumTrackTintColor="#f39b36" 
              thumbTintColor="#392DE9"
              value={size}
              onValueChange={value => (setSize(parseInt(value)))}
          />
      </View>

      <View style={{flexDirection: "row", justifyContent:"flex-start", alignItems:"center", width:"100%", marginLeft: 50, marginTop: 20}}>
        <Checkbox 
          status={checkSpecial?'checked':'unchecked'} 
          onPress={() => {setCheckSpecial(!checkSpecial);}}
          color="#392DE9"
        />
        <Text style={{fontWeight:"bold"}}>Incluir caracteres especiais</Text>
      </View>
      <View style={{flexDirection: "row", marginBottom: 50, justifyContent:"flex-start", alignItems:"center", width:"100%", marginLeft: 50}}>
        <Checkbox 
          status={checkCaps?'checked':'unchecked'}
          onPress={() => {setCheckCaps(!checkCaps);}}
          color="#392DE9"
        />
        <Text style={{fontWeight:"bold"}}>Incluir letras maiúsculas</Text>
      </View>

      <TouchableOpacity style={style.button} onPress={gerarSenha}>
        <Text style={style.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisivel} animationType="slide" transparent={true}>
        <ModalPassword senha={senhaValue} handleClose={()=>setModalVisivel(false)}/>
      </Modal>
    </View>
  )
}



const style = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#F3F3FF',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo:{
      height: 150,
      width: 110,
      marginBottom:80,
    },
    area:{
      marginTop: 14,
      marginBottom: 14,
      width: "80%",
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 5,
    },
    button:{
      backgroundColor: "#392DE9",
      width: "80%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      marginBottom: 18
    },
    buttonText:{
      color: 'white',
      fontSize: 20,
    },
    title:{
      fontSize: 30,
      fontWeight: "bold"
    }
})