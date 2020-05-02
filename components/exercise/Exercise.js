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


        </View>
    );
};

export default Exercise;


// {deadlift:[(weight x reps)]}
// 
// 
// 
// 