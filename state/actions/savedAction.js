export const SAVE_WORKOUT_START = "SAVE_WORKOUT_START"
export const SAVE_WORKOUT_SUCCESS = "SAVE_WORKOUT_SUCCESS"
export const SAVE_WORKOUT_FAIL = "SAVE_WORKOUT_FAIL"

export const GET_SCHEDULE_START = "GET_SCHEDULE_START"
export const GET_SCHEDULE_SUCCESS = "GET_SCHEDULE_SUCCESS"
export const GET_SCHEDULE_FAIL = "GET_SCHEDULE_FAIL"

export const GET_SAVED_WORKOUTS_START = "GET_SAVED_WORKOUTS_START"
export const GET_SAVED_WORKOUTS_SUCCESS = "GET_SAVED_WORKOUTS_SUCCESS"
export const GET_SAVED_WORKOUTS_FAIL = "GET_SAVED_WORKOUTS_FAIL"

export const SCHEDULE_WORKOUT_START = "SCHEDULE_WORKOUT_START"
export const SCHEDULE_WORKOUT_SUCCESS = "SCHEDULE_WORKOUT_SUCCESS"
export const SCHEDULE_WORKOUT_FAIL = "SCHEDULE_WORKOUT_FAIL"

import { axiosWithAuthorization } from "../../utils/index"

export const saveWorkout = (token, name) => dispatch => {
    dispatch({ type: SAVE_WORKOUT_START })
    axiosWithAuthorization(token).post(`/saved/workout/${workoutId}`, name)
        .then(res => dispatch({ type: SAVE_WORKOUT_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: SAVE_WORKOUT_FAIL, payload: err }))
}

export const getSchedule = (token) => dispatch => {
    dispatch({ GET_SCHEDULE_START })
    axiosWithAuthorization(token).get("/saved/schedule")
        .then(res => dispatch({ type: GET_SCHEDULE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_SCHEDULE_FAIL, payload: err }))
}

export const getSavedWorkouts = (token) => dispatch => {
    dispatch({ type: GET_SAVED_WORKOUTS_START })
    axiosWithAuthorization(state.reducer.token).get("/saved/workout")
        .then(res => dispatch({ type: GET_SAVED_WORKOUTS_SUCCESS, payload: res.data }))
        .catch(err => {
            dispatch({ type: GET_SAVED_WORKOUTS_FAIL, payload: err })
        })
}

export const scheduleWorkout = (token) => dispatch => {
    dispatch({ type: SCHEDULE_WORKOUT_START })
    axiosWithAuthorization(state.reducer.token).post(`/saved/${id}/schedule`, { date: currentDate })
        .then(res => dispatch({ type: SCHEDULE_WORKOUT_SUCCESS }))
        .catch(err => dispatch({ type: SCHEDULE_WORKOUT_FAIL }))
}