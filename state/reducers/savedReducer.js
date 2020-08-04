import {
    GET_SCHEDULE_START,
    GET_SCHEDULE_SUCCESS,
    GET_SCHEDULE_FAIL,
    SAVE_WORKOUT_START,
    SAVE_WORKOUT_SUCCESS,
    SAVE_WORKOUT_FAIL,
} from '../actions/savedAction'


const initialState = {
    templateId: null,
    exercises: [],
    exerciseLeft: [],
    savedWorkouts: [],
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
        default : {
            return state
        }
    }
}

export default reducer