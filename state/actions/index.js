import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const GET_TOKEN_START = "GET_TOKEN_START"
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS"
export const GET_TOKEN_FAIL = "GET_TOKEN_FAIL"

export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"

export const GET_EXERCISE_START = "GET_EXERCISE_START"
export const GET_EXERCISE_SUCCESS = "GET_EXERCISE_SUCCESS"
export const GET_EXERCISE_FAIL = "GET_EXERCISE_FAIL"

import { axiosWithAuthorization } from "../../utils/index"


const endpoint = 'http://192.168.1.3:5000'
export const getToken = () => async dispatch => {
    dispatch({ type: GET_TOKEN_START });
    try {
        await axiosWithAuthorization().get("/workout/exercise")
        .catch(err=>console.log(err))
        const token = await AsyncStorage.getItem("token")
        dispatch({ type: GET_TOKEN_SUCCESS, payload: token })
    } catch {
        console.log(e)
    }
}

export const getExercises = () => dispatch => {
    dispatch({ type: GET_EXERCISE_START })
    axios.get(`${endpoint}/workout/exercise`)
        .then(res => {
            dispatch({ type: GET_EXERCISE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_EXERCISE_FAIL, payload: err })
        })
}

export const setUserData = (user) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axiosWithAuthorization(null).post("/user/signin", user)
        .then(async (userData) => {
            await AsyncStorage.setItem("token", res.data.token)
            dispatch({ type: LOGIN_USER_START, payload: userData })
        })
        .catch(err => {
            dispatch({ type: LOGIN_USER_FAIL, payload: err })
        })
}