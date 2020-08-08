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
    EDIT_SET_START,
    EDIT_SET_SUCCESS,
    EDIT_SET_FAIL,
    DELETE_SET_START,
    DELETE_SET_SUCCESS,
    DELETE_SET_FAIL,
    DELETE_EXERCISE_START,
    DELETE_EXERCISE_SUCCESS,
    DELETE_EXERCISE_FAIL,
} from "../actions/workoutActions"

export const initialState = {
    currentExercise: null,
    workoutId: null,
    workoutExerciseId: null,
    templateId: null,
    exercise: null,
    loading: false,
    error: null,
    currentWorkoutId: null,
    fullCurrentExercise: [],
    currentWorkout: [],
    workoutInProgress: false,
    workoutFetched: false,
    exerciseInProgress: false,
    exerciseFetched: false,
    set: {},
    exercises: [],
    templateExercises: []
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
                fullCurrentExercise: [...state.fullCurrentExercise, action.payload],
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
                workoutId: action.payload.id,
                currentExercise: action.payload.exercise ? action.payload.exercise : null,
                currentWorkoutId: action.payload["workout_exercise_id"] ? action.payload["workout_exercise_id"] : null,
                workoutInProgress: true
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
                error: null,
                workoutFetched: false,
            }
        }
        case GET_WORKOUT_IN_PROGRESS_SUCCESS: {
            return {
                ...state,
                loading: false,
                workoutId: action.payload.id,
                templateId: action.payload.template_id ? action.payload.template_id : null,
                templateExercises: action.payload.exercises ? action.payload.exercises : null,
                workoutInProgress: true,
                workoutFetched: true,
            }
        }
        case GET_WORKOUT_IN_PROGRESS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload.err,
                workoutFetched: true,
            }
        }
        case GET_EXERCISE_IN_PROGRESS_START: {
            return {
                ...state,
                loading: true,
                error: null,
                exerciseFetched: false,
            }
        }
        case GET_EXERCISE_IN_PROGRESS_SUCCESS: {
            return {
                ...state,
                loading: false,
                fullCurrentExercise: action.payload[action.payload.current_exercise],
                exerciseInProgress: true,
                currentExercise: action.payload.current_exercise,
                workoutExerciseId: action.payload.workout_exercise_id,
                exerciseFetched: true,
            }
        }
        case GET_EXERCISE_IN_PROGRESS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload.err,
                exerciseFetched: true,
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
                loading: false,
                currentExercise: null,
                exerciseInProgress: false,
                fullCurrentExercise: [],
                workoutExerciseId: null
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
                currentWorkout: action.payload,
                exercises: action.payload.map(exercise => {
                    return {
                        exercise: exercise.exercise,
                        sets: exercise.sets.length
                    }
                })
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
                loading: false,
                currentWorkoutId: null,
                currentWorkout: [],
                workoutInProgress: false,
                exerciseInProgress: false,
                templateExercises: [],
                templateId: null
            }
        }
        case COMPLETE_WORKOUT_FAIL: {
            return {
                ...state,
                loading: false
            }
        }
        case EDIT_SET_START: {
            return {
                ...state,
                loading: true
            }
        }
        case EDIT_SET_SUCCESS: {
            return {
                ...state,
                loading: false,
                fullCurrentExercise:
                    state.fullCurrentExercise.map(sets => {
                        if (action.payload.id == sets.id) {
                            return action.payload
                        } return sets
                    })
            }
        }
        case EDIT_SET_FAIL: {
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        }
        case DELETE_SET_START: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case DELETE_SET_SUCCESS: {
            return {
                ...state,
                loading: false,
                fullCurrentExercise: action.payload
            }
        }
        case DELETE_SET_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case DELETE_EXERCISE_START: {
            return {
                ...state,
                loading: true
            }
        }
        case DELETE_EXERCISE_SUCCESS: {
            return {
                ...state,
                loading: false,
                exerciseInProgress: false,
                currentExercise: null,
                fullCurrentExercise: []
            }
        }
        case DELETE_EXERCISE_FAIL: {
            console.log("err", action.payload)
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state;
    }
}
export default workoutReducer;