import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'
import { workoutStyles } from '../../styles/index'

const Workout = ({ navigation }) => {
    const exerciseSet = navigation.state.params
    const allExercise = Object.keys(exerciseSet)
    const [currentWorkout, setCurrentWorkout] = useState([])

    useEffect(() => {
        axios.get(`http://192.168.1.3:5000//workout/${2}/set`) // needs to updated with dynamic
            .then(res => setCurrentWorkout(res.data))
            .catch(err => console.log(err))
    }, [])


    console.log(currentWorkout)
   
    return (
        <View style={workoutStyles.root}>
            {currentWorkout.length !== 0 ? currentWorkout.map(exercise => {
                return <View style={workoutStyles.exerciseWrapper}>
                    <Text style={workoutStyles.exerciseText}>{exercise.exercise}</Text>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        {exercise.sets.map(aSet => {
                            return <View style={workoutStyles.setWrapper}>
                                <Text style={workoutStyles.setText}>{aSet.weight} X {aSet.repetition}</Text>
                            </View>
                        })}
                    </View>
                </View>
            }) :
                null}
        </View>
    );
};

export default Workout;