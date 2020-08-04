export const SAVE_WORKOUT_START = "SAVE_WORKOUT_START"
export const SAVE_WORKOUT_SUCCESS = "SAVE_WORKOUT_SUCCESS"
export const SAVE_WORKOUT_FAIL = "SAVE_WORKOUT_FAIL"

export const GET_SCHEDULE_START = "GET_SCHEDULE_START"
export const GET_SCHEDULE_SUCCESS = "GET_SCHEDULE_SUCCESS"
export const GET_SCHEDULE_FAIL = "GET_SCHEDULE_FAIL"

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