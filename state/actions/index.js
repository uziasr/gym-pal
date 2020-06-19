import AsyncStorage from '@react-native-community/async-storage';

export const GET_TOKEN_START = "GET_TOKEN_START"
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS" 
export const GET_TOKEN_FAIL = "GET_TOKEN_FAIL" 

export const getToken = () => dispatch => {
    dispatch({ type: GET_TOKEN_START });
    AsyncStorage.getItem("token")
    .then(token =>{
        dispatch({type: GET_TOKEN_SUCCESS, payload: token})
    })
    .catch(error=>{
        dispatch({type: GET_TOKEN_FAIL, payload: error})
    })
    
}