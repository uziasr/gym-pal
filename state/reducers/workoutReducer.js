import {
    ADD_SET_START,
    ADD_SET_SUCCESS,
    ADD_SET_FAIL,
    ADD_EXERCISE_TO_WORKOUT_START,
    ADD_EXERCISE_TO_WORKOUT_SUCCESS,
    ADD_EXERCISE_TO_WORKOUT_FAIL
} from "../actions/workoutActions"

const initialState = {
    currentExercise: null,
    workoutExerciseId: null,
    loading: false,
    error: null,
    fullCurrentExercise: {
        // [initialState.currentExercise]: []
    }

}

const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SET_START: {
            return {
                ...state,
                loading: true
            }
        }
        case ADD_SET_SUCCESS: {
            return {
                ...state,
                fullCurrentExercise: {
                    [state.currentExercise]: [...state.fullCurrentExercise.currentExercise, action.payload]
                },
                loading: false
            }
        }
        case ADD_SET_FAIL: {
            return {
                ...state,
                error: action.payload,
                loading: false

            }
        }
        case ADD_EXERCISE_TO_WORKOUT_START: {
            return {
                ...state,
                loading: false
            }
        }
        case ADD_EXERCISE_TO_WORKOUT_SUCCESS: {
            return {
                ...state,
                currentExercise: action.payload.currentExercise,
                workoutExerciseId: action.payload.workoutExerciseId,
                loading: false
            }
        }
        case ADD_EXERCISE_TO_WORKOUT_FAIL: {
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
export default workoutReducer;