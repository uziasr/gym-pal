import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const GET_TOKEN_START = "GET_TOKEN_START"
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS" 
export const GET_TOKEN_FAIL = "GET_TOKEN_FAIL" 

export const GET_EXERCISE_START = "GET_EXERCISE_START"
export const GET_EXERCISE_SUCCESS = "GET_EXERCISE_SUCCESS"
export const GET_EXERCISE_FAIL = "GET_EXERCISE_FAIL"

export const ADD_SET_START = "ADD_SET_START" 
export const ADD_SET_SUCCESS = "ADD_SET_SUCCESS" 
export const ADD_SET_FAIL = "ADD_SET_FAIL" 

export const ADD_EXERCISE_TO_WORKOUT_START = "ADD_EXERCISE_TO_EXERCISE_START" 
export const ADD_EXERCISE_TO_WORKOUT_SUCCESS = "ADD_EXERCISE_TO_EXERCISE_SUCCESS" 
export const ADD_EXERCISE_TO_WORKOUT_FAIL = "ADD_EXERCISE_TO_EXERCISE_FAIL" 


const endpoint = 'http://192.168.1.3:5000'
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

export const getExercises = () => dispatch =>{
    dispatch({type: GET_EXERCISE_START})
    axios.get(`${endpoint}/workout/exercise`)
    .then(res=>{
        dispatch({type:GET_EXERCISE_SUCCESS, payload: res.data})  
    })
    .catch(err=>{
        dispatch({type: GET_EXERCISE_FAIL, payload: err})
    })
}

export const addSet = (workoutID, currentExercise) => dispatch => {
    dispatch({type: ADD_SET_START})
    axios.post(`${endpoint}/workout/${workoutID}/exercise`, {exercise, currentExercise})
    .then(res=>{
        const currentWorkoutId = res.data.id 
    })
    .catch(err=>{

    })
}

export const addExerciseToWorkout = (workoutID, currentExercise, formattedSet) => dispatch => {
    // to only be called when the first set is added
    dispatch({type: ADD_EXERCISE_TO_WORKOUT_START})
    axios.post(`${endpoint}/workout/${workoutID}/exercise`, {exercise, currentExercise})
    .then(res=>{
        const workoutExerciseId = res.data.id
        axios.post(`${endpoint}/workout/exercise/${workoutExerciseId}/set`, formattedSet)
        .then(res=>{

        })
        .catch(err=>{
            
        })

    })
    .catch(err=>{

    })

}
