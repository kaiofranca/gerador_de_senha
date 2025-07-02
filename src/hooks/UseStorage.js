import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //buscar itens salvos
    const getItem = async (key) => {
        try{
            const passwords = await AsyncStorage.getItem(key)
            return JSON.parse(passwords) || []

        } catch(error){
            console.log("Erro ao buscar ", error)
            return [];
        }
    }

    //Salvar item no storage
    const saveItem = async (key, value) => {
        try{
            if (typeof value !== 'string') {
                console.warn('Tentativa de salvar um valor inválido:', value)
                return
            }
            let passwords = await getItem(key)
            passwords.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        }catch(error){
            console.log("Erro ao salvar ", error)
        }
    }

    //Remover item do storage
    const removeItem = async (key, item) => {
        try {
            if (typeof item !== 'string') {
            console.warn('Item inválido para remoção:', item)
            return []
            }

            let passwords = await getItem(key)

            if (!Array.isArray(passwords)) {
            return []
            }

            const newPasswords = passwords.filter(p => typeof p === 'string' && p !== item)

            await AsyncStorage.setItem(key, JSON.stringify(newPasswords))

            return newPasswords
        } catch (error) {
            console.log("Erro ao remover item:", error)
            return []
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage