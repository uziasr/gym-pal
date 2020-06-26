import {
    GET_EXERCISE_LIST_START,
    GET_EXERCISE_LIST_SUCCESS,
    GET_EXERCISE_LIST_FAIL,
} from "../reducers/exerciseReducer"

const initialState = {
    exercises: [],
    loading: false
}

const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXERCISE_LIST_START: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_EXERCISE_LIST_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }
        case GET_EXERCISE_LIST_FAIL: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
}

export default exerciseReducer;

