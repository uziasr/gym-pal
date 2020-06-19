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
            console.log("this has started")
            return {
                ...initialState,
                loading: true
            }
        }
        case GET_TOKEN_SUCCESS: {
            console.log("this is succeeding", action.payload)
            return {
                ...initialState,
                token: action.payload
            }
        }
        case GET_TOKEN_FAIL: {
            console.log("this is failing")
            return {
                ...initialState
            }
        }
        default:
            return state
    }
}

export default reducer;