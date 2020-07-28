import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getToken } from '../../state/actions/index'
import { getExerciseInProgress, getWorkoutInProgress } from "../../state/actions/workoutActions"
import { homeStyles } from '../../styles/index'
import { axiosWithAuthorization } from '../../utils/index'


const Home = ({ navigation }) => {

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    const dateToday = new Date()
    const formattedDate = `${dateToday.getFullYear()}-${dateToday.getMonth() + 1 > 9 ? '' : 0}${dateToday.getMonth() + 1}-${dateToday.getDate() > 9 ? '' : 0}${dateToday.getDate()}`
    const [currentDate, setCurrentDate] = useState(formattedDate)
    const [scheduledWorkout, setScheduledWorkout] = useState([])

    useEffect(() => {
        dispatch(getToken())
        dispatch(getExerciseInProgress(state.reducer.token))
        dispatch(getWorkoutInProgress(state.reducer.token))
        console.log("this is token!", state.reducer.token)
        axiosWithAuthorization(state.reducer.token).post("/workout/saved/today", { date: currentDate })
            .then(res => {
                setScheduledWorkout(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [state.reducer.token])

    return (
        <View style={homeStyles.root}>
            <View>
                <Text style={{ fontSize: 28, color: "white", alignSelf: "center", marginVertical: 15 }}>Welcome {state.reducer.name ? state.reducer.name : null}</Text>
            </View>
            {scheduledWorkout.length ?
                <View>
                    <Text style={{ fontSize: 20, color: "white", marginLeft: 15, marginVertical: 15 }}>Workout of the Day</Text>
                    {scheduledWorkout.map((workout, index) => (
                        <View key={index}>
                            <Text style={{color:"white"}}>{workout.name}</Text>
                        </View>
                    ))}
                </View> : null
            }
            <TouchableOpacity onPress={() => navigation.navigate("Schedule")}>
                <Text>Go To Schedule</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Home;