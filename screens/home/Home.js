import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getToken } from '../../state/actions/index'
import { getExerciseInProgress, getWorkoutInProgress } from "../../state/actions/workoutActions"
import { homeStyles } from '../../styles/index'
import { axiosWithAuthorization } from '../../utils/index'
import { startWorkout } from "../../state/actions/workoutActions"
import { getWorkoutOfTheDay } from "../../state/actions/savedAction"


const Home = ({ navigation }) => {

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    const dateToday = new Date()
    const formattedDate = `${dateToday.getFullYear()}-${dateToday.getMonth() + 1 > 9 ? '' : 0}${dateToday.getMonth() + 1}-${dateToday.getDate() > 9 ? '' : 0}${dateToday.getDate()}`
    const [currentDate, setCurrentDate] = useState(formattedDate)

    useEffect(() => {
        dispatch(getToken())
        dispatch(getExerciseInProgress(state.reducer.token))
        dispatch(getWorkoutInProgress(state.reducer.token))
        dispatch(getWorkoutOfTheDay(state.reducer.token, { date: currentDate }))
    }, [state.reducer.token])


    const startWorkoutHandler = (scheduledWorkout) => {
        dispatch(startWorkout(state.reducer.token, scheduledWorkout))
        navigation.navigate('Sets', { exercise: scheduledWorkout.exercise, sets: { [scheduledWorkout.exercise]: [] } })
    }

    const resumeWorkoutHandler = () => {
        if (state.workoutReducer.workoutExerciseId) {
            navigation.navigate("Sets", { exercise: state.workoutReducer.currentExercise })
        } else if (state.workoutReducer.templateId) {
            navigation.navigate("Workout")
        } else {
            navigation.navigate("Exercise")
        }
    }

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
            {state.savedReducer.scheduledWorkout.length && !state.workoutReducer.workoutInProgress ?
                <View>
                    <View style={{ marginLeft: 15, marginVertical: 15 }}>
                        <Text style={{ fontSize: 20, color: "white" }}>Start Today's Workout!</Text>
                    </View>
                    {state.savedReducer.scheduledWorkout.map((workout, index) => (
                        <TouchableOpacity key={index} onPress={() => startWorkoutHandler({ muscles: workout.muscles, exercise: workout.exercises[0], template_id: workout["template_id"] })} style={{ alignSelf: "center", alignContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", width: "95%", marginBottom: 25, backgroundColor: "dodgerblue", borderRadius: 20, paddingVertical: 10 }}>
                            <View>
                                <Text style={{ color: "white", fontSize: 22 }}>{workout.name}</Text>
                            </View>
                            <View style={{ alignContent: "flex-start", alignItems: "flex-start", flexDirection: "row" }}>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{ alignSelf: "center", color: "white", fontSize: 16, marginBottom: 3 }}>Exercises</Text>
                                    {workout.exercises.map((exercise, index) => (
                                        <View key={index}>
                                            <Text style={{ color: "white" }}>{exercise}</Text>
                                        </View>
                                    ))}
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{ alignSelf: "center", color: "white", fontSize: 16, marginBottom: 3 }}>Muscles</Text>
                                    {workout.muscles.map((muscle, index) => (
                                        <View key={index}>
                                            <Text style={{ color: "white" }}>{muscle}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View> : null
            }
            <View style={{ marginLeft: 15, marginBottom: 15 }}>
                <Text style={{ fontSize: 20, color: "white" }}>Smart Schedule</Text>
            </View>
            <View style={{ marginLeft: 15, marginBottom: 15 }}>
                <Text style={{ fontSize: 20, color: "white" }}>Latest Workout Overview</Text>
            </View>
            {state.workoutReducer.workoutInProgress ?
                <TouchableOpacity onPress={() => resumeWorkoutHandler()} style={{ alignSelf: "center", alignContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", width: "95%", marginBottom: 10, backgroundColor: "mediumseagreen", borderRadius: 20, paddingVertical: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Resume Workout</Text>
                </TouchableOpacity> : null}
        </View>
    );
};


export default Home;