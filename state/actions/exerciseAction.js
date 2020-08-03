export const GET_EXERCISE_LIST_START = "GET_EXERCISE_LIST_START"
export const GET_EXERCISE_LIST_SUCCESS = "GET_EXERCISE_LIST_SUCCESS"
export const GET_EXERCISE_LIST_FAIL = "GET_EXERCISE_LIST_FAIL"

import { axiosWithAuthorization } from "../../utils/index"

export const getExercises = () => dispatch => {
    dispatch({ type: GET_EXERCISE_LIST_START })
    axiosWithAuthorization(null).get("/exercise")
        .then(res => {
            dispatch({ type: GET_EXERCISE_LIST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_EXERCISE_LIST_FAIL, payload: err })
        })
}