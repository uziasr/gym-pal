import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

export const getToken = async () => {
    console.log("this has started")
    try {
        const item = await AsyncStorage.getItem("@storage_Key")
        console.log("hello", item)
        return item
    } catch (e) {
        return null
    }
}

export const axiosWithAuthorization = (token) => {
    return axios.create({
        // baseURL: "https://gym-buddy-flask.herokuapp.com",
        baseURL:"http://192.168.1.3:5000",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}