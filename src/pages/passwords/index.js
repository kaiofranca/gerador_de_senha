import { useState, useEffect } from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/UseStorage'
import { PasswordItem } from './components/PasswordItem'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const {getItem, removeItem} = useStorage()


    useEffect(() => {
        async function loadPasswords() {
            const senhas = await getItem("@pass")
            if (Array.isArray(senhas)) {
            const senhasValidas = senhas
                .filter(item => typeof item === 'string') // só strings
                .filter(item => !!item && item.trim().length > 0) // remove vazias
            setListPasswords(senhasValidas)
            } else {
            setListPasswords([])
            }
        }

        loadPasswords()
    }, [focused])

    async function handleDeletePassword(item){
        console.log("Tentando remover:", item)
  
        if (typeof item !== 'string') {
            console.warn("Item inválido para remoção:", item)
            return
        }

        const novaLista = await removeItem("@pass", item)
        console.log("Nova lista após remoção:", novaLista)
        setListPasswords(novaLista)
    }
    console.log("Lista de senhas:", listPasswords)
    return(
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.header}> 
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{flex:1, paddingTop:14}}
                    data={listPasswords}
                    keyExtractor={(item)=> String(item)}
                    renderItem={({ item }) => <PasswordItem data={item} removePassword={()=>handleDeletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title:{
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
})