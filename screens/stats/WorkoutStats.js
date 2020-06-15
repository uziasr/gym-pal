import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView} from 'react-native';
import axios from 'axios'
import { workoutStatsStyles } from '../../styles/index'
import WorkoutPie from './WorkoutPie';


const WorkoutStats = ({ navigation }) => {

    const [workout, setWorkout] = useState([])
    const workoutId = navigation.state.params.id

    useEffect(() => {
        axios.get(`http://192.168.1.3:5000/workout/${workoutId}/set`)
            .then(res => {
                setWorkout([...res.data])
            })
            .catch(err => console.log(err))
    }, [])


    return workout.length > 0 ? (
        <View style={workoutStatsStyles.root}>
            <WorkoutPie workout={workout}/>
            <ScrollView>
                {workout.map((currentExercise, index) => {
                    return <View key={index}>
                        <Text style={workoutStatsStyles.text}>{currentExercise.exercise}</Text>
                        <View>
                            {currentExercise.sets.map((currentSet, index) => (
                                <Text key={index} style={workoutStatsStyles.text}>{currentSet.repetition} X {currentSet.weight}</Text>
                            ))}
                        </View>
                    </View>
                })}
            </ScrollView>
        </View>
    ) : <Text>Loading...</Text>
};

export default WorkoutStats;