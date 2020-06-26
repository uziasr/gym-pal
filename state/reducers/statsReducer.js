import {
    GET_ALL_EXERCISE_START,
    GET_ALL_EXERCISE_SUCCESS,
    GET_ALL_EXERCISE_FAIL,
} from '../actions/statsActions'

const initialState = {
    dates: [],
    exercise: [],
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
        case GET_ALL_EXERCISE_SUCCESS : {
            return {
                ...state,
                dates: action.payload.dates,
                exercises: action.payload.exercises,
                totalWorkouts: action.payload.total_workouts,
                error: null,
                loading: false
            }
        }
        case GET_ALL_EXERCISE_FAIL : {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
    
        default:
            return state;
    }

}
export default statsReducer;