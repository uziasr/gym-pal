import {
    GET_TOKEN_START,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAIL,
    GET_EXERCISE_START,
    GET_EXERCISE_SUCCESS,
    GET_EXERCISE_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
} from "../actions/index"


const initialState = {
    userId: null,
    token: null,
    currentWorkoutId: null,
    currentSetId: null,
    loading: false,
    tokenOnLoading: true,
    exerciseArr: [],
    error: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN_START: {
            return {
                ...state,
            }
        }
        case GET_TOKEN_SUCCESS: {
            return {
                ...state,
                token: action.payload,
                tokenOnLoading: false
            }
        }
        case GET_TOKEN_FAIL: {
            return {
                ...state,
                tokenOnLoading: false
            }
        }
        case GET_EXERCISE_START: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_EXERCISE_SUCCESS: {
            return {
                ...state,
                exerciseArr: [...action.payload],
                loading: false
            }
        }
        case GET_EXERCISE_FAIL: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case LOGIN_USER_START: {
            return {
                ...state,
                loading: true
            }
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.id,
                loading:false
            }
        }
        case LOGIN_USER_FAIL : { 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;