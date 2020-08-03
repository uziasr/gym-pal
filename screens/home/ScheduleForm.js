import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { axiosWithAuthorization } from '../../utils/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"


const ScheduleForm = ({ navigation }) => {

    const state = useSelector(state => state, shallowEqual)
    const [savedWorkouts, setSavedWorkouts] = useState([])
    const currentDate = navigation.state.params.date

    useEffect(()=>{
        axiosWithAuthorization(state.reducer.token).get("/saved/workout")
        .then(res=>{
            setSavedWorkouts(res.data)
        })
        .catch(err=>{
            console.log(err.response)
        })
    },[])

    const saveWorkout = (id) =>{
        axiosWithAuthorization(state.reducer.token).post(`/saved/${id}/schedule`, {date: currentDate})
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <View>
            <Text style={{alignSelf: "center", fontSize: 20, marginVertical: 10}}>Saved Workouts</Text>
            <View style={{marginLeft:15}}>
                {savedWorkouts.map((savedWorkout, index)=>(
                    <TouchableOpacity key={index} onPress={()=>saveWorkout(savedWorkout.id)}>
                        <Text>{savedWorkout.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default ScheduleForm;