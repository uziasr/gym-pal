import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Overlay } from 'react-native-elements'
import { autoInputStyles } from '../styles/index'

const CompleteWorkoutOverlay = ({ visible, toggleOverlay, completeWorkoutHandler }) => {

    return (
        <Overlay overlayStyle={autoInputStyles.overlayStyle} isVisible={visible} onBackdropPress={toggleOverlay}>
            <View>
                <Text style={autoInputStyles.overlayTitle}>Are you sure you want to finish your workout?</Text>
                <View style={autoInputStyles.completeWorkoutWrap}>
                    <TouchableOpacity onPress={() => toggleOverlay()} style={{ backgroundColor: "dodgerblue", padding: 10, borderRadius: 12 }}>
                        <Text style={autoInputStyles.workoutText}>Continue Workout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => completeWorkoutHandler()} style={{ backgroundColor: "dodgerblue", padding: 10, borderRadius: 12 }}>
                        <Text style={autoInputStyles.workoutText}>Finish Workout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Overlay>
            )
        }
        
export default CompleteWorkoutOverlay