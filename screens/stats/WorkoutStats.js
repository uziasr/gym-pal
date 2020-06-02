import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios'
import { workoutStatsStyles } from '../../styles/index'
import WorkoutPie from './WorkoutPie';


const WorkoutStats = ({ navigation }) => {

    const [workout, setWorkout] = useState([])
    const workoutId = navigation.state.params.id

    useEffect(() => {
        axios.get(`http://192.168.1.3:5000/workout/${workoutId}/set`)
            .then(res => {
                console.log("look here ", res)
                setWorkout([...res.data])
            })
            .catch(err => console.log(err))
    }, [])


    return workout.length > 0 ? (
        <View>
            <WorkoutPie/>
            {workout.map((currentExercise, index) => {
                return <View key={index}>
                    <Text>{currentExercise.exercise}</Text>
                    <View style={workoutStatsStyles.exerciseWrap}>
                        {currentExercise.sets.map((currentSet, index) => (
                            <Text key={index}>{currentSet.repetition} X {currentSet.weight}</Text>
                        ))}
                    </View>
                </View>
            })}
        </View>
    ) : <Text>Loading...</Text>
};

export default WorkoutStats;