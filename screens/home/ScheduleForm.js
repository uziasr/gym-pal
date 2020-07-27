import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { axiosWithAuthorization } from '../../utils/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"


const ScheduleForm = () => {

    const state = useSelector(state => state, shallowEqual)
    const [savedWorkouts, setSavedWorkouts] = useState([])

    useEffect(()=>{
        axiosWithAuthorization(state.reducer.token).get("/workout/saved")
        .then(res=>{
            setSavedWorkouts(res.data)
        })
        .catch(err=>{
            console.log(err.response)
        })
    },[])

    return (
        <View>
            <Text>Saved Workouts</Text>
            {savedWorkouts.map((savedWorkout, index)=>(
                <View key={index}>
                    <Text>{savedWorkout.name}</Text>
                </View>
            ))}
        </View>
    );
};

export default ScheduleForm;