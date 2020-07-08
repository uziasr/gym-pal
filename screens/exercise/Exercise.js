import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AutoInput from '../../components/AutoInput'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getExercises } from "../../state/actions/exerciseAction"
import { addExerciseToWorkout } from '../../state/actions/workoutActions'

const Exercise = ({ navigation }) => {

    const [exercise, setExercise] = useState('')
    const [workout, setWorkout] = useState({})
    const [isSelected, setSelected] = useState({})
    const [isActive, setActive] = useState(false)
    const dispatch = useDispatch()

    const state = useSelector(state => state, shallowEqual)

    useEffect(() => {
        dispatch(getExercises())
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
            <AutoInput navigation={navigation} data={state.exerciseReducer.exercises} listLimit={10} pressHandler={addExercise} />
        </View>
    );
};

export default Exercise;
