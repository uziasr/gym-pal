import {
    ADD_SET_START,
    ADD_SET_SUCCESS,
    ADD_SET_FAIL,
    ADD_EXERCISE_TO_WORKOUT_START,
    ADD_EXERCISE_TO_WORKOUT_SUCCESS,
    ADD_EXERCISE_TO_WORKOUT_FAIL,
    START_WORKOUT_START,
    START_WORKOUT_SUCCESS,
    START_WORKOUT_FAIL,
    GET_WORKOUT_IN_PROGRESS_START,
    GET_WORKOUT_IN_PROGRESS_SUCCESS,
    GET_WORKOUT_IN_PROGRESS_FAIL,
    GET_EXERCISE_IN_PROGRESS_START,
    GET_EXERCISE_IN_PROGRESS_SUCCESS,
    GET_EXERCISE_IN_PROGRESS_FAIL,
    COMPLETE_EXERCISE_START,
    COMPLETE_EXERCISE_SUCCESS,
    COMPLETE_EXERCISE_FAIL,
    GET_WORKOUT_BY_ID_START,
    GET_WORKOUT_BY_ID_SUCCESS,
    GET_WORKOUT_BY_ID_FAIL,
    COMPLETE_WORKOUT_START,
    COMPLETE_WORKOUT_SUCCESS,
    COMPLETE_WORKOUT_FAIL,
} from "../actions/workoutActions"

const initialState = {
    currentExercise: null,
    workoutId: null,
    workoutExerciseId: null,
    exercise: null,
    loading: false,
    error: null,
    currentWorkoutId: null,
    fullCurrentExercise: {
    },
    currentWorkout: [],
    workoutInProgress: false,
    exerciseInProgress: false

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
                loading: true,
                error: null
            }
        }
        case ADD_EXERCISE_TO_WORKOUT_SUCCESS: {
            return {
                ...state,
                currentExercise: action.payload.exercise,
                workoutExerciseId: action.payload.id,
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

        case START_WORKOUT_START: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case START_WORKOUT_SUCCESS: {
            return {
                ...state,
                loading: false,
                workoutId: action.payload.id
            }
        }
        case START_WORKOUT_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case GET_WORKOUT_IN_PROGRESS_START: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_WORKOUT_IN_PROGRESS_SUCCESS: {
            return {
                ...state,
                loading: false,
                workoutId: action.payload.id,
                workoutInProgress: true
            }
        }
        case GET_WORKOUT_IN_PROGRESS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload.err
            }
        }
        case GET_EXERCISE_IN_PROGRESS_START: {
            return {
                ...state,
                loading: false,
                error: null
            }
        }
        case GET_EXERCISE_IN_PROGRESS_SUCCESS: {
            return {
                ...state,
                loading: false,
                fullCurrentExercise: action.payload,
                exerciseInProgress: true
            }
        }
        case GET_EXERCISE_IN_PROGRESS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload.err
            }
        }
        case COMPLETE_EXERCISE_START: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case COMPLETE_EXERCISE_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }
        case COMPLETE_EXERCISE_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case GET_WORKOUT_BY_ID_START: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_WORKOUT_BY_ID_SUCCESS: {
            return {
                ...state,
                loading: false,
                currentWorkout: action.payload
            }
        }
        case GET_WORKOUT_BY_ID_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case COMPLETE_WORKOUT_START: {
            return {
                ...state,
                loading: true
            }
        }
        case COMPLETE_WORKOUT_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }
        case COMPLETE_WORKOUT_FAIL: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
}
export default workoutReducer;