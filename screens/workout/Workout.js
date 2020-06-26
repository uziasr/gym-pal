import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios'
import { workoutStyles } from '../../styles/index'

const Workout = ({ navigation }) => {
    const [currentWorkout, setCurrentWorkout] = useState([])

    useEffect(() => {
        axios.get(`http://192.168.1.3:5000//workout/${8}/set`) // needs to updated with dynamic
            .then(res => setCurrentWorkout(res.data))
            .catch(err => console.log(err))
    }, [])


    const nextExerciseHandler = () => {
        navigation.navigate("Exercise")
    }

    const completeWorkout = () => {
        axios.get(`http://192.168.1.3:5000//workout/${8}/end`)
            .then(res => {
                4
                console.log(res)
                navigation.navigate("Overall Stats")
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={workoutStyles.root}>
            <ScrollView>
                {currentWorkout.length !== 0 ? currentWorkout.map((exercise, index) => {
                    return <View key={index} style={workoutStyles.exerciseWrapper}>
                        <View style={workoutStyles.exerciseTextWrap}>
                            <Text style={workoutStyles.exerciseText}>{exercise.exercise}</Text>
                        </View>
                        <View style={workoutStyles.setWrapper}>
                            {exercise.sets.map((aSet, index) => {
                                return <View key={index} style={{ ...workoutStyles.setTextWrapper, backgroundColor: aSet.unit == "pounds" ? "dodgerblue" : "green", marginBottom: index + 1 == exercise.sets.length ? 0 : 8 }}>
                                    <Text style={workoutStyles.setText}>{aSet.weight} X {aSet.repetition} ({aSet.unit == "pounds" ? "LBS" : "KG"})</Text>
                                </View>
                            })}
                        </View>
                        <View style={{ ...workoutStyles.exerciseTextWrap, paddingLeft:10 }}>
                            <Text style={workoutStyles.exerciseText}>{index + 1}</Text>
                        </View>
                    </View>
                }) :
                    null}
            </ScrollView>
            <Button onPress={() => nextExerciseHandler()} title="Next Exercise" buttonStyle={{ backgroundColor: "green", marginVertical: 5 }} />
            <Button onPress={() => completeWorkout()} title="Complete Workout" buttonStyle={{ backgroundColor: "dodgerblue" }} />
        </View>
    );
};

export default Workout;