import AsyncStorage from '@react-native-community/async-storage';


const getToken = async () => {
    try {
        const item = await AsyncStorage.getItem("@storage_Key")
        return item
    } catch(e) {
        return null
    }
}

export const loggedIn = "this will be the token"