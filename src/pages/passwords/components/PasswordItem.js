import { useState } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export function PasswordItem({data, removePassword}){
    const texto = typeof data === 'string' ? data : '[senha inválida]'

    const [showPassword, setShowPassword] = useState(styles.unmasked)

    const [eyeIcon, setEyeIcon] = useState(true)

    const changeIcon = () => {
        setEyeIcon(!eyeIcon)
    }

    const [senhaOculta, setSenhaOculta] = useState(false)
    function ocultarSenha(condition){
        if(condition === false){
            setShowPassword(styles.masked)
        } else{
            setShowPassword(styles.unmasked)
        }
    }


    return(
        <Pressable onLongPress={removePassword} style={styles.container}>
            <View style={showPassword}>
                <Text style={styles.text}>{data}</Text>
            </View>
            <TouchableOpacity onPress={() => {
               setSenhaOculta(!senhaOculta)
               ocultarSenha(senhaOculta)
               changeIcon()
            }}>
                <Ionicons name={eyeIcon ? "eye-outline": "eye-off-outline"}  color={"white"} size={20}></Ionicons>
            </TouchableOpacity>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding:14,
        width: "100%",
        marginBottom: 14, 
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text:{
        color: '#D9D9D9',
    },
    masked:{
        width: "70%",
        backgroundColor: "#D9D9D9",
        borderRadius: 8
    },
    unmasked:{
        backgroundColor: "#0e0e0e"
    }
})