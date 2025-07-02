import { useState } from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { ModalPassword } from "../../components/modal"

export function Home(){
  const [size, setSize] = useState(10)
  const [senhaValue, setSenhaValue] = useState('')
  const [modalVisivel, setModalVisivel] = useState(false)

  const gerarSenha = () => {
    let senha = ""
    for (let i=0, n=charSet.length; i<size; i++){
      senha += charSet.charAt(Math.floor(Math.random() * n))
    }
    setSenhaValue(senha)

    setModalVisivel(true)
  }

  let charSet= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

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
              maximumTrackTintColor="red" 
              minimumTrackTintColor="black" 
              thumbTintColor="#392DE9"
              value={size}
              onValueChange={value => (setSize(parseInt(value)))}
          />
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
      marginBottom: 60,
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