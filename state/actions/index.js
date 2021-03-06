import AsyncStorage from '@react-native-community/async-storage';

export const GET_TOKEN_START = "GET_TOKEN_START"
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS"
export const GET_TOKEN_FAIL = "GET_TOKEN_FAIL"

export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"

export const GET_EXERCISE_START = "GET_EXERCISE_START"
export const GET_EXERCISE_SUCCESS = "GET_EXERCISE_SUCCESS"
export const GET_EXERCISE_FAIL = "GET_EXERCISE_FAIL"

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

import { axiosWithAuthorization } from "../../utils/index"

export const getToken = () => async dispatch => {
    dispatch({ type: GET_TOKEN_START });
    try {
        const token = await AsyncStorage.getItem("token")
        const name = await AsyncStorage.getItem("name")
        dispatch({ type: GET_TOKEN_SUCCESS, payload: { token: token, name: name } })
    } catch {
        null
        // console.log(e)
    }
}

export const getExercises = () => dispatch => {
    dispatch({ type: GET_EXERCISE_START })
    axiosWithAuthorization().get(`/exercise`)
        .then(res => {
            dispatch({ type: GET_EXERCISE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_EXERCISE_FAIL, payload: err })
        })
}

export const login = (user) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axiosWithAuthorization(null).post("/user/login", user)
        .then(async (res) => {
            await AsyncStorage.setItem("token", res.data.token)
            await AsyncStorage.setItem("name", res.data.name)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: LOGIN_USER_FAIL, payload: err })
        })
}

export const register = (user) => dispatch => {
    dispatch({ type: REGISTER_START })
    axiosWithAuthorization(null).post("/user/register", user)
        .then(async res => {
            await AsyncStorage.setItem("token", res.data.token)
            await AsyncStorage.setItem("name", res.data.name)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAIL, payload: err })
        })
}
