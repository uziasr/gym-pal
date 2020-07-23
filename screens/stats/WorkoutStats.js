import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { workoutStatsStyles } from '../../styles/index'
import WorkoutPie from './WorkoutPie';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getWorkoutById } from '../../state/actions/workoutActions';
import Spinner from '../../utils/Spinner';


const WorkoutStats = ({ navigation }) => {

    const workoutId = navigation.state.params.id
    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    const workout = state.workoutReducer.currentWorkout

    useEffect(() => {
        dispatch(getWorkoutById(state.reducer.token, workoutId))
    }, [])


    return state.workoutReducer.loading ?  <Spinner /> : (
        <View style={workoutStatsStyles.root}>
            <WorkoutPie workout={workout} />
            <TouchableOpacity style={workoutStatsStyles.buttonSaveStyle}>
                <Text style={workoutStatsStyles.buttonTextSaveStyle}>Save this Workout</Text>
            </TouchableOpacity>
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
    ) 
};

export default WorkoutStats;