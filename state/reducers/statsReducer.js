import {
    GET_ALL_EXERCISE_START,
    GET_ALL_EXERCISE_SUCCESS,
    GET_ALL_EXERCISE_FAIL,
    GET_USER_WORKOUT_START,
    GET_USER_WORKOUT_SUCCESS,
    GET_USER_WORKOUT_FAIL,
} from '../actions/statsActions'

const initialState = {
    dates: [],
    exercise: [],
    allWorkouts: [],
    totalWorkouts: 0,
    loading: false,
    error: null
}

const statsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_EXERCISE_START:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_EXERCISE_SUCCESS: {
            return {
                ...state,
                dates: action.payload.dates,
                exercises: action.payload.exercises,
                totalWorkouts: action.payload.total_workouts,
                error: null,
                loading: false
            }
        }
        case GET_ALL_EXERCISE_FAIL: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case GET_USER_WORKOUT_START: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_USER_WORKOUT_SUCCESS: {
            return {
                ...state,
                allWorkouts: action.payload,
                loading: false,
                error: null
            }
        }
        case GET_USER_WORKOUT_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default:
            return state;
    }

}
export default statsReducer;