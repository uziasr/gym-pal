import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AutoInput from '../../components/AutoInput'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getExercises } from "../../state/actions/exerciseAction"
import { getWorkoutById } from "../../state/actions/workoutActions"
import { addExerciseToWorkout } from '../../state/actions/workoutActions'
import splitConversion from '../workout/splitHelper';


const Exercise = ({ navigation }) => {

    const muscles = navigation.state.params ? splitConversion(navigation.state.params.muscles) : null

    const [exercise, setExercise] = useState('')
    const [workout, setWorkout] = useState({})
    const [isActive, setActive] = useState(false)
    const dispatch = useDispatch()

    const state = useSelector(state => state, shallowEqual)

    useEffect(() => {
        dispatch(getExercises())
        if(state.workoutReducer.workoutId) {
            dispatch(getWorkoutById(state.reducer.token, state.workoutReducer.workoutId))
        }
    }, [])

    const addExercise = (newExercise) => {
        //this should check for the validity of an exercise => autocomplete and exercise
        setWorkout(() => {
            setActive(true)
            return { ...workout, [newExercise]: [] }
        })
        setExercise(newExercise)
        dispatch(addExerciseToWorkout(state.reducer.token, state.workoutReducer.workoutId, { exercise: newExercise }))
        navigation.navigate('Sets', { exercise: newExercise, sets: {[newExercise] : []} })
    }

    return (
        <View>
            <AutoInput currentExercises={state.workoutReducer.exercises} focusedMuscles={muscles} navigation={navigation} data={state.exerciseReducer.exercises} listLimit={10} pressHandler={addExercise} />
        </View>
    );
};

export default Exercise;
