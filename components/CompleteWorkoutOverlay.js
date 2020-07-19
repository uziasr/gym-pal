import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Overlay } from 'react-native-elements'
import { autoInputStyles } from '../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { AntDesign } from '@expo/vector-icons';



const CompleteWorkoutOverlay = ({ visible, navigation, toggleOverlay, completeWorkoutHandler }) => {

    const [completeWorkout, setCompleteWorkout] = useState(false)
    const state = useSelector(state => state, shallowEqual)
    const currentExercises = state.workoutReducer.exercises

    return (
        <Overlay overlayStyle={{ ...autoInputStyles.overlayStyle, height: (currentExercises.length * 35) + 250 }} isVisible={visible} onBackdropPress={toggleOverlay}>
            <View>
                <TouchableOpacity onPress={() => toggleOverlay()} style={{ paddingHorizontal: 5 }}>
                    <AntDesign style={{ alignSelf: "flex-end", textAlign: "center" }} name="closecircleo" size={24} color="black" />
                </TouchableOpacity>
                <View style={{ paddingBottom: 30, alignContent: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: "center", paddingBottom: 18 }}>Workout Progress</Text>
                    {currentExercises.map((exercise, index) => (
                        <View key={index} style={{ paddingVertical: 5, paddingHorizontal: 10, flexDirection:"row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16 }}>{exercise.exercise}</Text>
                            <Text>{exercise.sets} set{exercise.sets > 1 ? "s" : ""}</Text>
                        </View>
                    ))}
                </View>
                <View style={{}}>
                    <TouchableOpacity onPress={() => {
                        toggleOverlay()
                        navigation.navigate("Workout")
                    }} style={autoInputStyles.overlayButton}>
                        <Text style={autoInputStyles.workoutText}>Workout Details</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: completeWorkout ?  10 : 0 }}><Text style={autoInputStyles.overlayTitle}>{completeWorkout ? "Are you sure you want to finish your workout?" : ""}</Text></View>
                    {completeWorkout ? <View style={autoInputStyles.completeWorkoutWrap}>
                        <TouchableOpacity onPress={() => setCompleteWorkout(!completeWorkout)} style={autoInputStyles.overlayButton}>
                            <Text style={autoInputStyles.workoutText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => completeWorkoutHandler()} style={autoInputStyles.overlayButton}>
                            <Text style={autoInputStyles.workoutText}>Finish Workout</Text>
                        </TouchableOpacity>
                    </View> :
                        <TouchableOpacity onPress={() => setCompleteWorkout(!completeWorkout)} style={autoInputStyles.overlayButton}>
                            <Text style={autoInputStyles.workoutText}>Finish Workout</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </Overlay>
    )
}

export default CompleteWorkoutOverlay