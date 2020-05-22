import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios'


const WorkoutStats = ({ navigation }) => {

    const [workout, setWorkout] = useState([])

    useEffect(()=>{
        axios.get(`http://192.168.1.3:5000/workout/1/set`)
        .then(res=> setWorkout({...res.data}))
        .catch(err=>console.log(err))
    },[])

    return (
        <View>
            {workout.map(currentExercise=>(
                currentExercise.map(currentSet=>(
                    <Text>{currentSet.repetition} X {currentSet.weight}</Text>
                ))
            ))}
        </View>
    );
};

export default WorkoutStats;