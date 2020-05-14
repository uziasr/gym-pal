import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input'
import axios from 'axios'
import Workout from './Workout'
import AutoInput from '../../components/AutoInput'

const Exercise = () => {

    const [exercise, setExercise] = useState('')
    const [exerciseList, setExerciseList] = useState([])
    const [workout, setWorkout] = useState({})
    const [isSelected, setSelected] = useState({})
    const [isActive, setActive] = useState(false)

    useEffect(() => {
        axios.get("http://192.168.1.6:5000//workout/exercise")
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
    }
    console.log('this is workout in Exercise.js', workout)
    return (
        <View>
            {Object.keys(workout).map((anExercise, index) => <Text key={index}>{anExercise}</Text>)}
            {!isActive ?
                <>

                    <AutoInput data={exerciseList} listLimit={10} pressHandler={addExercise}/>
                    {/* <Button onPress={() => addExercise()} title='Go!' /> */}
                </>
                :
                <Workout exercise={exercise} setWorkout={setWorkout} workout={workout}/>
            }
            {workout[exercise] ?
                workout[exercise].map(set => {
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>
                        <Text>{set[0]}</Text>
                        <Text>X</Text>
                        <Text>{set[1]}</Text>
                    </View>
                })
                : null}
        </View>
    );
};

export default Exercise;
