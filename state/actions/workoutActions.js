export const ADD_SET_START = "ADD_SET_START"
export const ADD_SET_SUCCESS = "ADD_SET_SUCCESS"
export const ADD_SET_FAIL = "ADD_SET_FAIL"

export const ADD_EXERCISE_TO_WORKOUT_START = "ADD_EXERCISE_TO_EXERCISE_START"
export const ADD_EXERCISE_TO_WORKOUT_SUCCESS = "ADD_EXERCISE_TO_EXERCISE_SUCCESS"
export const ADD_EXERCISE_TO_WORKOUT_FAIL = "ADD_EXERCISE_TO_EXERCISE_FAIL"

import { axiosWithAuthorization } from '../../utils/index'

const endpoint = 'http://192.168.1.3:5000'
export const addSet = (workoutExerciseId, formattedSet) => dispatch => {
    dispatch({ type: ADD_SET_START })
    axios.post(`${endpoint}/workout/exercise/${workoutExerciseId}`, formattedSet)
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
            dispatch({ type: ADD_EXERCISE_TO_WORKOUT_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({ type: ADD_EXERCISE_TO_WORKOUT_FAIL, payload: err })
        })

}
