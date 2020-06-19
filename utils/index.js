import AsyncStorage from '@react-native-community/async-storage';


const getToken = async () => {
    console.log("this has started")
    try {
        const item = await AsyncStorage.getItem("@storage_Key")
        console.log("hello", item)
        return item
    } catch(e) {
        return null
    }
}
(async() => getToken())()
console.log("this should come very last!")

export const loggedIn = "this will be the token"