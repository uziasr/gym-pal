import {
    GET_SCHEDULE_START,
    GET_SCHEDULE_SUCCESS,
    GET_SCHEDULE_FAIL,
    SAVE_WORKOUT_START,
    SAVE_WORKOUT_SUCCESS,
    SAVE_WORKOUT_FAIL,
    GET_SAVED_WORKOUTS_START,
    GET_SAVED_WORKOUTS_SUCCESS,
    GET_SAVED_WORKOUTS_FAIL,
    GET_WORKOUT_OF_THE_DAY_START,
    GET_WORKOUT_OF_THE_DAY_SUCCESS,
    GET_WORKOUT_OF_THE_DAY_FAIL,
    SCHEDULE_WORKOUT_START,
    SCHEDULE_WORKOUT_SUCCESS,
    SCHEDULE_WORKOUT_FAIL,
} from '../actions/savedAction'


const initialState = {
    templateId: null,
    exercises: [],
    exerciseLeft: [],
    savedWorkouts: [],
    scheduledWorkout: [],
    agenda: {},
    loading: false,
    err: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SCHEDULE_START: {
            return {
                ...state,
                loading: true,
                err: null
            }
        }
        case GET_SCHEDULE_SUCCESS: {
            return {
                ...state,
                loading: false,
                agenda: action.payload
            }
        }
        case GET_SCHEDULE_FAIL: {
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        }
        case SAVE_WORKOUT_START: {
            return {
                ...state,
                loading: true,

            }
        }
        case SAVE_WORKOUT_SUCCESS: {
            return {
                ...state,
                loading: false,
            }
        }
        case SAVE_WORKOUT_FAIL: {
            return {
                ...state,
                loading: false,
            }
        }
        case GET_SAVED_WORKOUTS_START: {
            return {
                ...state,
                loading: true,
                error: null

            }
        }
        case GET_SAVED_WORKOUTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                savedWorkouts: action.payload

            }
        }
        case GET_SAVED_WORKOUTS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        }
        case GET_WORKOUT_OF_THE_DAY_START: {
            return {
                ...state,
                loading: true,
                err: null
            }
        }
        case GET_WORKOUT_OF_THE_DAY_SUCCESS: {
            return {
                ...state,
                loading: false,
                scheduledWorkout: action.payload
            }
        }
        case GET_WORKOUT_OF_THE_DAY_FAIL: {
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer