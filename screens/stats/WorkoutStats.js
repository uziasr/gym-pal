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
import { axiosWithAuthorization } from "../../utils/index"



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
            dispatch(saveWorkout(state.reducer.token), { name: workoutName })
            // axiosWithAuthorization(state.reducer.token).post(`/saved/workout/${workoutId}`, { name: workoutName })
            //     .then(res => console.log(res.data))
            //     .catch(err => console.log(err.response))
        }

        return (
            <Overlay onBackdropPress={onToggle} isVisible={visible} overlayStyle={{ width: "90%" }}>
                <View>
                    <View style={{marginVertical:5}}>
                        <Text style={{fontSize: 24, alignSelf: "center"}}>Save</Text>
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
            <TouchableOpacity onPress={() => onToggle()} style={workoutStatsStyles.buttonStyleExercise}>
                <Fontisto name="save" size={16} color="whitesmoke" />
            </TouchableOpacity>
            <WorkoutPie workout={workout} />
            <>
                <SaveOverlay />
            </>
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