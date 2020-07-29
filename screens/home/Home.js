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
            <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 28, color: "white", alignSelf: "center" }}>Welcome {state.reducer.name ? state.reducer.name : null}</Text>
            </View>
            <View>
                <View style={{ marginLeft: 15, marginBottom: 15 }}>
                    <Text style={{ fontSize: 20, color: "white" }}>Schedule</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Schedule")} style={{ alignSelf: "center", alignContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", width: "95%", marginBottom: 10, backgroundColor: "mediumseagreen", borderRadius: 20, paddingVertical: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Go To Schedule</Text>
                </TouchableOpacity>
            </View>
            {scheduledWorkout.length ?
                <View>
                    <View style={{ marginLeft: 15, marginVertical: 15 }}>
                        <Text style={{ fontSize: 20, color: "white" }}>Today's workout!</Text>
                    </View>
                    {scheduledWorkout.map((workout, index) => (
                        <TouchableOpacity key={index} style={{ alignSelf: "center", alignContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", width: "95%", marginBottom: 25, backgroundColor: "dodgerblue", borderRadius: 20, paddingVertical: 10 }}>
                            <View>
                                <Text style={{ color: "white", fontSize: 18 }}>{workout.name}</Text>
                            </View>
                            <View>
                                <Text style={{ alignSelf: "center", color: "white", fontSize: 16 }}>Muscles Trained</Text>
                                {workout.muscles.map((muscle, index) => (
                                    <View key={index}>
                                        <Text style={{ color: "white" }}>{muscle}</Text>
                                    </View>
                                ))}
                            </View>
                            <View>
                                <Text style={{ alignSelf: "center", color: "white", fontSize: 16 }}>Exercises</Text>
                                {workout.exercises.map((exercise, index) => (
                                    <View key={index}>
                                        <Text style={{ color: "white" }}>{exercise}</Text>
                                    </View>
                                ))}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View> : null
            }
        </View>
    );
};


export default Home;