import { loggedIn } from '../../utils/index'
import {
    GET_TOKEN_START,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAIL
} from "../actions/index"


const initialState = {
    userId: null,
    token: null,
    currentWorkoutId: null,
    currentSetId: null,
    loading: false,
    tokenOnLoading: true 
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN_START: {
            return {
                ...initialState,
            }
        }
        case GET_TOKEN_SUCCESS: {
            console.log("this is success")
            return {
                ...initialState,
                token: null,
                tokenOnLoading: false
            }
        }
        case GET_TOKEN_FAIL: {
            return {
                ...initialState,
                tokenOnLoading: false
            }
        }
        default:
            return state
    }
}

export default reducer;