import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { workoutStatsStyles } from '../../styles/index'
import WorkoutPie from './WorkoutPie';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getWorkoutById } from '../../state/actions/workoutActions';
import { saveWorkout } from '../../state/actions/savedAction'
import Spinner from '../../utils/Spinner';
import { Fontisto } from '@expo/vector-icons';
import { Overlay, Input } from 'react-native-elements';




const WorkoutStats = ({ navigation }) => {

    const workoutId = navigation.state.params.workout.id
    const muscles = navigation.state.params.muscles

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    const workout = state.workoutReducer.currentWorkout

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        dispatch(getWorkoutById(state.reducer.token, workoutId))
    }, [])


    const onToggle = () => {
        setVisible(!visible)
    }

    const SaveOverlay = () => {

        const [workoutName, setWorkoutName] = useState("")

        const saveHandler = () => {
            onToggle()
            dispatch(saveWorkout(state.reducer.token, workoutId, { name: workoutName }))
        }

        return (
            <Overlay onBackdropPress={onToggle} isVisible={visible} overlayStyle={{ width: "90%" }}>
                <View>
                    <View style={{ marginVertical: 5 }}>
                        <Text style={{ fontSize: 24, alignSelf: "center" }}>Save</Text>
                    </View>
                    <View style={{ alignSelf: "center" }}>
                        <Text style={{ fontSize: 18 }}>Name this Workout</Text>
                    </View>
                    <View style={{ paddingBottom: 0, marginBottom: 0 }}>
                        <Input
                            placeholder="Workout Name"
                            onChangeText={(text) => setWorkoutName(text)}
                            value={workoutName}
                        />
                    </View>
                    <Text style={{ alignSelf: "center", fontSize: 16 }}>Muscle Trained</Text>
                    <View >
                        {muscles.map((muscle, index) => {
                            return <Text key={index}>{muscle[0] == " " ? muscle.slice(1) : muscle}</Text>
                        })}
                    </View>
                    <View style={{ marginBottom: 25 }}>
                        <Text style={{ alignSelf: "center", fontSize: 16 }}>Exercises</Text>
                        {workout.map((currentExercise, index) => (<View key={index}>
                            <Text style={{}}>{currentExercise.exercise}</Text>
                        </View>))}
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "space-between", width: "60%" }}>
                        <TouchableOpacity style={{ marginBottom: 10, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, backgroundColor: "dodgerblue" }} onPress={onToggle}><Text style={{ color: "white" }}>Cancel</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => saveHandler()} style={{ marginBottom: 10, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, backgroundColor: workoutName.length ? "dodgerblue" : "lightgray" }} disabled={!workoutName}><Text style={{ color: workoutName.length ? "white" : "black" }}>Save</Text></TouchableOpacity>
                    </View>
                </View>
            </Overlay>
        )
    }

    return state.workoutReducer.loading ? <Spinner /> : (
        <View style={workoutStatsStyles.root}>
            <ScrollView>
                <WorkoutPie workout={workout} onToggle={onToggle} />
                <>
                    <SaveOverlay />
                </>
                <View style={{ width: "90%", alignSelf: "center", marginBottom: 15 }}>
                    <Text style={workoutStatsStyles.workoutTitle}>Workout</Text>
                    {workout.map((currentExercise, index) => {
                        return <View key={index} style={{ marginVertical: 10 }}>
                            <Text style={{ ...workoutStatsStyles.text, fontSize: 20, marginBottom: 15 }}>{currentExercise.exercise}</Text>
                            <View style={{ alignSelf: "center", width: "100%" }}>
                                <View key={index} style={{ width:"100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 5, alignSelf: "center"}}>
                                    <Text style={{ ...workoutStatsStyles.text, alignSelf: "flex-end", fontSize: 18 }}>Sets</Text>
                                    <Text style={{ ...workoutStatsStyles.text, alignSelf: "flex-end", fontSize: 18 }}>Previous</Text>                                    
                                    <Text style={{ ...workoutStatsStyles.text, alignSelf: "flex-end", fontSize: 18 }}>1RM</Text>
                                </View>
                                <View style={{flexDirection:"row",justifyContent: "space-between"}}>
                                    <View style={{}}>
                                        {currentExercise.sets.map((currentSet, index) => {
                                            return <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <Text style={{ ...workoutStatsStyles.text, alignSelf: "flex-end", fontSize: 16 }}>{currentSet.repetition} X {currentSet.weight} {currentSet.unit == "pounds" ? "LBS" : "KG"}</Text>
                                            </View>
                                        })}
                                    </View>
                                    <View>
                                        {currentExercise.previous_sets.map((previousSet, index) => (
                                            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <Text style={{ ...workoutStatsStyles.text, alignSelf: "flex-end", fontSize: 16 }}>{previousSet.repetition} X {previousSet.weight} {previousSet.unit == "pounds" ? "LBS" : "KG"}</Text>
                                            </View>
                                        ))}
                                    </View>
                                    <View>
                                        {currentExercise.sets.map((currentSet, index) => {
                                            return <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <Text style={{ ...workoutStatsStyles.text, alignSelf: "flex-end", fontSize: 16 }}>{Math.round(currentSet.max)} {currentSet.unit == "pounds" ? "LBS" : "KG"}</Text>
                                            </View>
                                        })}
                                    </View>
                                </View>
                            </View>
                        </View>
                    })}
                </View>
            </ScrollView>
        </View>
    )
};

export default WorkoutStats;