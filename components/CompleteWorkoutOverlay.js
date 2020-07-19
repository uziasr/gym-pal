import React, { useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Overlay } from 'react-native-elements'
import { autoInputStyles } from '../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"



const CompleteWorkoutOverlay = ({ visible, navigation, toggleOverlay, completeWorkoutHandler }) => {

    const [completeWorkout, setCompleteWorkout] = useState(false)
    const state = useSelector(state => state, shallowEqual)
    const currentExercises = state.workoutReducer.exercises
    
    return (
        <Overlay overlayStyle={{...autoInputStyles.overlayStyle, height: (currentExercises.length * 100) + 110  }} isVisible={visible} onBackdropPress={toggleOverlay}>
            <View>
                <View>
                    <Text>Workout Progress</Text>
                    {currentExercises.map((exercise, index)=>(
                        <View key={index}>
                            <Text>{exercise.exercise} {exercise.sets}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity onPress={()=> {
                    toggleOverlay()
                    navigation.navigate("Workout")}} style={autoInputStyles.overlayButton}>
                    <Text style={autoInputStyles.workoutText}>Workout Details</Text>
                </TouchableOpacity>
                <Text style={autoInputStyles.overlayTitle}>{completeWorkout ? "Are you sure you want to finish your workout?" : ""}</Text>
               { completeWorkout ? <View style={autoInputStyles.completeWorkoutWrap}>
                    <TouchableOpacity onPress={() =>  setCompleteWorkout(!completeWorkout)} style={autoInputStyles.overlayButton}>
                        <Text style={autoInputStyles.workoutText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => completeWorkoutHandler()} style={autoInputStyles.overlayButton}>
                        <Text style={autoInputStyles.workoutText}>Finish Workout</Text>
                    </TouchableOpacity>
                </View>:
                <TouchableOpacity onPress={() => setCompleteWorkout(!completeWorkout)} style={autoInputStyles.overlayButton}>
                    <Text style={autoInputStyles.workoutText}>Finish Workout</Text>
                </TouchableOpacity>
            }
            </View>
            </Overlay>
            )
        }
        
export default CompleteWorkoutOverlay