import {
    GET_ALL_EXERCISE_START,
    GET_ALL_EXERCISE_SUCCESS,
    GET_ALL_EXERCISE_FAIL,
    GET_USER_WORKOUT_START,
    GET_USER_WORKOUT_SUCCESS,
    GET_USER_WORKOUT_FAIL,
    GET_WORKOUT_BY_DATE_START,
    GET_WORKOUT_BY_DATE_SUCCESS,
    GET_WORKOUT_BY_DATE_FAIL,
    GET_EXERCISE_STATS_START,
    GET_EXERCISE_STATS_SUCCESS,
    GET_EXERCISE_STATS_FAIL,
} from '../actions/statsActions'

const initialState = {
    dates: [],
    exercises: [],
    allWorkouts: [],
    workoutByDate: [],
    exerciseData: {},
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

        case GET_WORKOUT_BY_DATE_START: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_WORKOUT_BY_DATE_SUCCESS: {
            return {
                ...state,
                loading: false,
                workoutByDate: action.payload
            }
        }
        case GET_WORKOUT_BY_DATE_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case GET_EXERCISE_STATS_START: {
            return {
                ...state,
                error: null,
                loading: true
            }
        }
        case GET_EXERCISE_STATS_SUCCESS: {
            return {
                ...state,
                error: null,
                loading: false,
                exerciseData: action.payload
            }
        }
        case GET_EXERCISE_STATS_FAIL: {
            return {
                ...state,
                error: action.payload,
                loading: false,
                exerciseData:{}
            }
        }
        default:
            return state;
    }

}
export default statsReducer;