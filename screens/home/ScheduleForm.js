import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { axiosWithAuthorization } from '../../utils/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getSavedWorkouts, scheduleWorkout } from '../../state/actions/savedAction'


const ScheduleForm = ({ navigation }) => {

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    const currentDate = navigation.state.params.date

    useEffect(() => {
        // axiosWithAuthorization(state.reducer.token).get("/saved/workout")
        // .then(res=>{
        //     setSavedWorkouts(res.data)
        // })
        // .catch(err=>{
        //     console.log(err.response)
        // })
        dispatch(getSavedWorkouts(state.reducer.token))
    }, [])

    const saveWorkout = (id) => {
        dispatch(scheduleWorkout(state.reducer.token, id, { date: currentDate }))
        navigation.navigate("Schedule")
    }

    return (
        <View>
            <Text style={{ alignSelf: "center", fontSize: 20, marginVertical: 10 }}>Saved Workouts</Text>
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