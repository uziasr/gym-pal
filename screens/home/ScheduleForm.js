import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { axiosWithAuthorization } from '../../utils/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getSavedWorkouts, scheduleWorkout } from '../../state/actions/savedAction'
import { scheduleStyles } from '../../styles/index'

const ScheduleForm = ({ navigation }) => {

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    const currentDate = navigation.state.params.date

    useEffect(() => {
        dispatch(getSavedWorkouts(state.reducer.token))
    }, [])

    const saveWorkout = (id) => {
        dispatch(scheduleWorkout(state.reducer.token, id, { date: currentDate }))
        navigation.navigate("Schedule")
    }
    console.log(state.savedReducer.savedWorkouts)

    return (
        <View style={scheduleStyles.root}>
            <Text style={scheduleStyles.rootTitle}>Welcome to the Gym Pal Schedule Tool</Text>
            <View style={scheduleStyles.toolDescriptionWrap}>
                <Text style={scheduleStyles.toolDescriptionText}>Looking for workouts? This tool supports creating schedules using Workout Templates.</Text>
                <Text style={scheduleStyles.toolDescriptionText}>Go to your favorite workout and create and template of it and you will find it here!</Text>
            </View>
            <Text style={scheduleStyles.savedTitle}>Saved Workouts</Text>
            <View style={{ marginLeft: 15 }}>
                {state.savedReducer.savedWorkouts.map((savedWorkout, index) => (
                    <TouchableOpacity key={index} onPress={() => saveWorkout(savedWorkout.id)}>
                        <Text>{savedWorkout.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default ScheduleForm;