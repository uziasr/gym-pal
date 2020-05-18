import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input'
import axios from 'axios'
import Workout from './Workout'
import AutoInput from '../../components/AutoInput'

const Exercise = ({ navigation }) => {

    const [exercise, setExercise] = useState('')
    const [exerciseList, setExerciseList] = useState([])
    const [workout, setWorkout] = useState({})
    const [isSelected, setSelected] = useState({})
    const [isActive, setActive] = useState(false)

    useEffect(() => {
        axios.get("http://192.168.1.3:5000/workout/exercise")
            .then(res => setExerciseList(res.data))
            .catch(err => console.log(err))
    }, [])

    const addExercise = (new_exercise) => {
        //this should check for the validity of an exercise => autocomplete and exercise
        setWorkout(() => {
            setActive(true)
            return { ...workout, [new_exercise]: [] }
        })
        setExercise(new_exercise)
        navigation.navigate('ExerciseSet',{exercise:new_exercise})

    }

    return (
        <View>
            <AutoInput data={exerciseList} listLimit={10} pressHandler={addExercise} />
        </View>
    );
};

export default Exercise;
