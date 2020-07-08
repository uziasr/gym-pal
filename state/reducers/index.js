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
    REGISTER_SUCCESS,
    REGISTER_START,
    REGISTER_FAIL,
} from "../actions/index"


const initialState = {
    userId: null,
    name: null,
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
                name: action.payload.name,
                loading: false
            }
        }
        case LOGIN_USER_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case REGISTER_START: {
            return {
                ...state,
                loading: false,
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                name: action.payload.name,
                userId: action.payload.id
            }
        }
        case REGISTER_FAIL: {
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