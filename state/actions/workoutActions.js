export const ADD_SET_START = "ADD_SET_START"
export const ADD_SET_SUCCESS = "ADD_SET_SUCCESS"
export const ADD_SET_FAIL = "ADD_SET_FAIL"

export const ADD_EXERCISE_TO_WORKOUT_START = "ADD_EXERCISE_TO_EXERCISE_START"
export const ADD_EXERCISE_TO_WORKOUT_SUCCESS = "ADD_EXERCISE_TO_EXERCISE_SUCCESS"
export const ADD_EXERCISE_TO_WORKOUT_FAIL = "ADD_EXERCISE_TO_EXERCISE_FAIL"

export const START_WORKOUT_START = "START_WORKOUT_START"
export const START_WORKOUT_SUCCESS = "START_WORKOUT_SUCCESS"
export const START_WORKOUT_FAIL = "START_WORKOUT_FAIL"

export const GET_WORKOUT_IN_PROGRESS_START = "GET_WORKOUT_IN_PROGRESS_START"
export const GET_WORKOUT_IN_PROGRESS_SUCCESS = "GET_WORKOUT_IN_PROGRESS_SUCCESS"
export const GET_WORKOUT_IN_PROGRESS_FAIL = "GET_WORKOUT_IN_PROGRESS_FAIL"

export const GET_EXERCISE_IN_PROGRESS_START = "GET_EXERCISE_IN_PROGRESS_START"
export const GET_EXERCISE_IN_PROGRESS_SUCCESS = "GET_EXERCISE_IN_PROGRESS_SUCCESS"
export const GET_EXERCISE_IN_PROGRESS_FAIL = "GET_EXERCISE_IN_PROGRESS_FAIL"

export const COMPLETE_EXERCISE_START = "COMPLETE_EXERCISE_START"
export const COMPLETE_EXERCISE_SUCCESS = "COMPLETE_EXERCISE_SUCCESS"
export const COMPLETE_EXERCISE_FAIL = "COMPLETE_EXERCISE_FAIL"

export const GET_WORKOUT_BY_ID_START = "GET_WORKOUT_BY_ID_START"
export const GET_WORKOUT_BY_ID_SUCCESS = "GET_WORKOUT_BY_ID_SUCCESS"
export const GET_WORKOUT_BY_ID_FAIL = "GET_WORKOUT_BY_ID_FAIL"

export const COMPLETE_WORKOUT_START = "COMPLETE_WORKOUT_START"
export const COMPLETE_WORKOUT_SUCCESS = "COMPLETE_WORKOUT_SUCCESS"
export const COMPLETE_WORKOUT_FAIL = "COMPLETE_WORKOUT_FAIL"

import { axiosWithAuthorization } from '../../utils/index'

export const addSet = (token, workoutExerciseId, formattedSet) => dispatch => {
    dispatch({ type: ADD_SET_START })
    axiosWithAuthorization(token).post(`/workout/exercise/${workoutExerciseId}/set
    
    `, formattedSet)
        .then(res => {
            dispatch({ type: ADD_SET_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_SET_FAIL })
        })
}


export const addExerciseToWorkout = (token, workoutId, exercise) => dispatch => {
    // to only be called when the first set is added
    dispatch({ type: ADD_EXERCISE_TO_WORKOUT_START })
    axiosWithAuthorization(token).post(`/workout/${workoutId}/exercise`, exercise)
        .then(res => {
            dispatch({ type: ADD_EXERCISE_TO_WORKOUT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_EXERCISE_TO_WORKOUT_FAIL, payload: err })
        })

}

export const startWorkout = (token, musclesObj) => dispatch => {
    dispatch({ type: START_WORKOUT_START })
    axiosWithAuthorization(token).post("/user/workout", musclesObj)
        .then(res => {
            dispatch({ type: START_WORKOUT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: START_WORKOUT_FAIL, payload: err })
        })
}

export const getWorkoutInProgress = (token) => dispatch => {
    dispatch({ type: GET_WORKOUT_IN_PROGRESS_START })
    axiosWithAuthorization(token).get("/workout/startup")
        .then(res => {
            dispatch({ type: GET_WORKOUT_IN_PROGRESS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_WORKOUT_IN_PROGRESS_FAIL, payload: err })
        })

}

export const getExerciseInProgress = (token) => dispatch => {
    dispatch({ type: GET_EXERCISE_IN_PROGRESS_START })
    axiosWithAuthorization(token).get("/workout/set/startup")
        .then(res => {
            dispatch({ type: GET_EXERCISE_IN_PROGRESS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_EXERCISE_IN_PROGRESS_FAIL, payload: err })
        })
}

export const completeSet = (token, workoutExerciseId) => dispatch => {
    dispatch({ type: COMPLETE_EXERCISE_START })
    axiosWithAuthorization(token).patch(`/workout/${workoutExerciseId}/exercise`)
        .then(res => {
            dispatch({ type: COMPLETE_EXERCISE_SUCCESS })
        })
        .catch(err => {
            dispatch({ type: COMPLETE_EXERCISE_FAIL, payload: err })
        })
}

export const getWorkoutById = (token, workoutID) => dispatch => {
    dispatch({ type: GET_WORKOUT_BY_ID_START })
    axiosWithAuthorization(token).get(`/workout/${workoutID}/set`)
        .then(res => {
            dispatch({ type: GET_WORKOUT_BY_ID_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_WORKOUT_BY_ID_FAIL, payload: err })
        })
}

export const completeWorkout = (token, workoutID) => dispatch => {
    dispatch({ type: COMPLETE_WORKOUT_START })
    axiosWithAuthorization(token).get(`/workout/${workoutID}/end`)
        .then(res => {
            dispatch({ type: COMPLETE_WORKOUT_SUCCESS })
        })
        .catch(err => {
            dispatch({ type: COMPLETE_WORKOUT_FAIL, payload: err })
        })
}