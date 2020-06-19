import { loggedIn } from '../../utils/index'
import {
    GET_TOKEN_START,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAIL
} from "../actions/index"


const initialState = {
    userId: null,
    token: loggedIn,
    currentWorkoutId: null,
    currentSetId: null,
    loading: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN_START: {
            return {
                ...initialState,
                loading: true
            }
        }
        case GET_TOKEN_SUCCESS: {
            return {
                ...initialState,
                token: action.payload
            }
        }
        case GET_TOKEN_FAIL: {
            return {
                ...initialState
            }
        }
        default:
            return state
    }
}

export default reducer;