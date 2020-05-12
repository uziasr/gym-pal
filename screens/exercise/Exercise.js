import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import Workout from './Workout'

const Exercise = () => {

    const [exercise, setExercise] = useState('')
    const [workout, setWorkout] = useState({})
    const [isSelected, setSelected] = useState({})
    const [isActive, setActive] = useState(false)

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
                    <TextInput
                        editable
                        placeholder='Add Exercise'
                        value={exercise}
                        onChangeText={text => setExercise(text)}
                    />
                    <Button onPress={() => addExercise()} title='Go!' />
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
