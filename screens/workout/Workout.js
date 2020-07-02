import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { workoutStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getWorkoutById, completeWorkout } from "../../state/actions/workoutActions"


const Workout = ({ navigation }) => {
    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWorkoutById(state.reducer.token, state.workoutReducer.workoutId))
    }, [])


    const nextExerciseHandler = () => {
        navigation.navigate("Exercise")
    }

    const completeHandler = () => {
        dispatch(completeWorkout(state.reducer.token,state.workoutReducer.workoutId))
        navigation.navigate("Overall Stats")

    }

    return (
        <View style={workoutStyles.root}>
            <ScrollView>
                {state.workoutReducer.currentWorkout.length !== 0 ? state.workoutReducer.currentWorkout.map((exercise, index) => {
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
                        <View style={{ ...workoutStyles.exerciseTextWrap, paddingLeft: 10 }}>
                            <Text style={workoutStyles.exerciseText}>{index + 1}</Text>
                        </View>
                    </View>
                }) :
                    null}
            </ScrollView>
            <Button onPress={() => nextExerciseHandler()} title="Next Exercise" buttonStyle={{ backgroundColor: "green", marginVertical: 5 }} />
            <Button onPress={() => completeHandler()} title="Complete Workout" buttonStyle={{ backgroundColor: "dodgerblue" }} />
        </View>
    );
};

export default Workout;