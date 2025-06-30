import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native"

export function ModalPassword({senha, handleClose}){
    return(
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={styles.senhaBox}>
                    <Text style={styles.text}>{senha}</Text>
                </Pressable>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.save]}>
                        <Text style={styles.buttonSalvarText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    content:{
        backgroundColor: 'white',
        width: "85%",
        borderRadius: 8,
        paddingTop: 24,
        paddingBottom: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
      fontSize: 20,
      fontWeight: "bold",
      color: 'black',
      marginBottom: 24
    },
    senhaBox:{
        backgroundColor: '#0e0e0e',
        borderRadius: 8,
        width: "90%",
        padding: 14,
    },
    text:{
        color: "white",
        textAlign: "center"
    },
    row:{
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        marginTop: 8,
        justifyContent: "space-between"
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 14
    },
    save:{
        backgroundColor: "#392DE9",
        borderRadius: 8,
        
    },
    buttonSalvarText:{
        color: "white",
        fontWeight: "bold"
    }
})