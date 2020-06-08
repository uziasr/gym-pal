import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
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
            {currentWorkout.length !== 0 ? currentWorkout.map((exercise, index) => {
                return <View key={index} style={workoutStyles.exerciseWrapper}>
                    <Text style={workoutStyles.exerciseText}>{exercise.exercise}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        {exercise.sets.map((aSet, index) => {
                            return <View key={index} style={{ ...workoutStyles.setWrapper, backgroundColor: aSet.unit == "pounds" ? "dodgerblue" : "green" }}>
                                <Text style={workoutStyles.setText}>{aSet.weight} X {aSet.repetition}</Text>
                            </View>
                        })}
                    </View>
                </View>
            }) :
                null}
            <Button onPress={() => console.log("next exercise")} title="Next Exercise"  buttonStyle={{ backgroundColor: "green", marginVertical: 5 }} />
            <Button onPress={() => console.log("complete workout")} title="Complete Workout" buttonStyle={{ backgroundColor: "dodgerblue" }} />
        </View>
    );
};

export default Workout;