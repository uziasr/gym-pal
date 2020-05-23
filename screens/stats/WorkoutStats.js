import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios'


const WorkoutStats = ({ navigation }) => {

    const [workout, setWorkout] = useState([])
    console.log(navigation.state)
    const workoutId = navigation.state.params.id

    useEffect(() => {
        axios.get(`http://192.168.1.3:5000/workout/${workoutId}/set`)
            .then(res => {
                console.log("look here ", res)
                setWorkout([...res.data])
            })
            .catch(err => console.log(err))
    }, [])

    console.log("now look here ", workout)

    return workout.length > 0 ? (
        <View>
            {workout.map(currentExercise => {
                return <>
                    <Text>{currentExercise.exercise}</Text>
                    {currentExercise.sets.map(currentSet => (
                        <Text>{currentSet.repetition} X {currentSet.weight}</Text>
                    ))}
                </>
            })}
        </View>
    ) : <Text>Loading...</Text>
};

export default WorkoutStats;