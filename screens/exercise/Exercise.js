import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input'
import axios from 'axios'
import Workout from './Workout'

const Exercise = () => {

    const [exercise, setExercise] = useState({name:'h'})
    const [exerciseList, setExerciseList] =useState([])
    const [workout, setWorkout] = useState({})
    const [isSelected, setSelected] = useState({})
    const [isActive, setActive] = useState(false)

    useEffect(()=>{
        axios.get("http://192.168.1.6:5000//workout/exercise")
        .then(res=>setExerciseList(res.data))
        .catch(err=>console.log(err))
    },[])

    const addExercise = () => {
        //this should check for the validity of an exercise => autocomplete and exercise
        setWorkout(() => {
            setActive(true)
            return { ...workout, [exercise]: [] }
        })
    }
    console.log('this is workout in Exercise.js', workout)
    return (
        <View>
            {Object.keys(workout).map((anExercise, index) => <Text key={index}>{anExercise}</Text>)}
            {!isActive ?
                <>
                    {/* <TextInput
                        editable
                        placeholder='Add Exercise'
                        value={exercise}
                        onChangeText={text => setExercise(text)}
                    /> */}
                    <View style={{
                        flex: 1,
                        left: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        zIndex: 1
                    }}>
                        <Autocomplete
                            data={["hello", 'bye']}
                            onChangeText={text => setExercise({name:text})}
                            defaultValue={exercise.name}
                            placeholder="Enter Exercise"
                            value={exercise.name}
                            renderItem={({ item, i }) => (
                                <TouchableOpacity onPress={() =>        setExercise({name:item})}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    {/* <Button onPress={() => addExercise()} title='Go!' /> */}
                </>
                :
                <Workout exercise={exercise} setWorkout={setWorkout} workout={workout} />
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
