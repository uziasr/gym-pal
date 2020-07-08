export const GET_ALL_EXERCISE_START = "GET_ALL_EXERCISE_START";
export const GET_ALL_EXERCISE_SUCCESS = "GET_ALL_EXERCISE_SUCCESS";
export const GET_ALL_EXERCISE_FAIL = "GET_ALL_EXERCISE_FAIL";

export const GET_USER_WORKOUT_START = "GET_USER_WORKOUT_START"
export const GET_USER_WORKOUT_SUCCESS = "GET_USER_WORKOUT_SUCCESS"
export const GET_USER_WORKOUT_FAIL = "GET_USER_WORKOUT_FAIL"

export const GET_WORKOUT_BY_DATE_START = "GET_WORKOUT_BY_DATE_START"
export const GET_WORKOUT_BY_DATE_SUCCESS = "GET_WORKOUT_BY_DATE_SUCCESS"
export const GET_WORKOUT_BY_DATE_FAIL = "GET_WORKOUT_BY_DATE_FAIL"

export const GET_EXERCISE_STATS_START = "GET_EXERCISE_STATS_START"
export const GET_EXERCISE_STATS_SUCCESS = "GET_EXERCISE_STATS_SUCCESS"
export const GET_EXERCISE_STATS_FAIL = "GET_EXERCISE_STATS_FAIL"

import { axiosWithAuthorization } from "../../utils/index"

export const getDashData = (token) => dispatch => {
    dispatch({ type: GET_ALL_EXERCISE_START })
    axiosWithAuthorization(token).get("/user/exercise")
        .then(res => {
            dispatch({ type: GET_ALL_EXERCISE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_ALL_EXERCISE_FAIL, payload: err })
        })
}

export const getUserWorkout = (token) => dispatch => {
    dispatch({ type: GET_USER_WORKOUT_START })
    axiosWithAuthorization(token).get(`/user/workouts`)
        .then(res => {
            dispatch({ type: GET_USER_WORKOUT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_USER_WORKOUT_FAIL, payload: err })
        })
}

export const getWorkoutByDate = (token, date) => dispatch => {
    dispatch({ type: GET_WORKOUT_BY_DATE_START })
    axiosWithAuthorization(token).post("/user/workouts/date", date)
        .then(res => {
            dispatch({ type: GET_WORKOUT_BY_DATE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_WORKOUT_BY_DATE_FAIL, payload: err })
        })
}

export const getExerciseStats = (token, exerciseId) => dispatch => {
    dispatch({ type: GET_EXERCISE_STATS_START })
    axiosWithAuthorization(token).get(`user/exercise/${exerciseId}`)
        .then(res => {
            dispatch({ type: GET_EXERCISE_STATS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_EXERCISE_STATS_FAIL, payload: err })
        })
}