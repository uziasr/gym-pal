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
        await axiosWithAuthorization().get("/workout/exercise")
            .catch(err => console.log(err))
        const token = await AsyncStorage.getItem("token")
        dispatch({ type: GET_TOKEN_SUCCESS, payload: token })
    } catch {
        console.log(e)
    }
}

export const getExercises = () => dispatch => {
    dispatch({ type: GET_EXERCISE_START })
    axiosWithAuthorization().get(`/workout/exercise`)
        .then(res => {
            dispatch({ type: GET_EXERCISE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_EXERCISE_FAIL, payload: err })
        })
}

export const login = (user) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axiosWithAuthorization(null).post("/user/signin", user)
        .then(async (res) => {
            console.log(res.data)
            await AsyncStorage.setItem("token", res.data.token)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: userData })
        })
        .catch(err => {
            dispatch({ type: LOGIN_USER_FAIL, payload: err })
        })
}

export const register = (user) => dispatch => {
    dispatch({ type: REGISTER_START })
    axiosWithAuthorization(null).post("/user/signup", user)
        .then(async res => {
            await AsyncStorage.setItem("token", res.data.token)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAIL, payload: err })
        })
}
