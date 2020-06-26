import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import axios from 'axios'
import AutoInput from '../../components/AutoInput'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getExercise } from "../../state/actions/exerciseAction"

const Exercise = ({ navigation }) => {

    const [exercise, setExercise] = useState('')
    const [workout, setWorkout] = useState({})
    const [isSelected, setSelected] = useState({})
    const [isActive, setActive] = useState(false)
    const dispatch = useDispatch()

    const state = useSelector(state=>state.exerciseReducer, shallowEqual)

    useEffect(() => {
        dispatch(getExercise())
    }, [])

    const addExercise = (new_exercise) => {
        //this should check for the validity of an exercise => autocomplete and exercise
        setWorkout(() => {
            setActive(true)
            return { ...workout, [new_exercise]: [] }
        })
        setExercise(new_exercise)
        navigation.navigate('ExerciseSet', { exercise: new_exercise })

    }

    return (
        <View>
            <AutoInput data={state.exercises} listLimit={10} pressHandler={addExercise} />
        </View>
    );
};

export default Exercise;
