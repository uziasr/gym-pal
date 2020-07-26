import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { workoutStatsStyles } from '../../styles/index'
import WorkoutPie from './WorkoutPie';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getWorkoutById } from '../../state/actions/workoutActions';
import Spinner from '../../utils/Spinner';
import { Fontisto } from '@expo/vector-icons';
import axios from "axios"



const WorkoutStats = ({ navigation }) => {

    const workoutId = navigation.state.params.id
    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    const workout = state.workoutReducer.currentWorkout

    useEffect(() => {
        dispatch(getWorkoutById(state.reducer.token, workoutId))
    }, [])

    console.log(workoutId)

    const saveHandler = () => {
        axios.post(`http://192.168.1.3:5000/saved/workout/${workoutId}`,{name:"full body workout"})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return state.workoutReducer.loading ? <Spinner /> : (
        <View style={workoutStatsStyles.root}>
            <TouchableOpacity onPress={()=>saveHandler()} style={workoutStatsStyles.buttonStyleExercise}>
                <Fontisto name="save" size={16} color="whitesmoke" />
            </TouchableOpacity>
            <WorkoutPie workout={workout} />
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