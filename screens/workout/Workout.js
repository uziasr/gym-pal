import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { workoutStyles, autoInputStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getWorkoutById, completeWorkout } from "../../state/actions/workoutActions"
import { NavigationEvents } from 'react-navigation';
import Spinner from "../../utils/Spinner"

const Workout = ({ navigation }) => {
    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        dispatch(getWorkoutById(state.reducer.token, state.workoutReducer.workoutId))
    }, [])


    const nextExerciseHandler = () => {
        navigation.navigate("Exercise")
    }

    const toggleOverlay = () => {
        setVisible(() => !visible);
    };

    const completeHandler = () => {
        toggleOverlay()
        dispatch(completeWorkout(state.reducer.token, state.workoutReducer.workoutId))
        navigation.navigate("Overall Stats")

    }

    const RecordedWorkout = () => (
        <ScrollView>
            {state.workoutReducer.currentWorkout.length !== 0 ? state.workoutReducer.currentWorkout.map((exercise, index) => {
                return <View key={index} style={workoutStyles.exerciseWrapper}>
                    <View style={workoutStyles.exerciseTextWrap}>
                        <Text style={{ ...workoutStyles.exerciseText, fontSize: 20, fontWeight: "bold" }}>{`${index + 1}   ${exercise.exercise}`}</Text>
                    </View>
                    <View style={workoutStyles.workoutExerciseWrap}>
                        <View>
                            <View>
                                <View style={workoutStyles.setTextWrapper}>
                                    <Text style={workoutStyles.setText}>Sets</Text>
                                </View>
                            </View>
                            <View style={workoutStyles.setWrapper}>
                                {exercise.sets.map((aSet, index) => {
                                    return <View key={index} style={{ ...workoutStyles.setTextWrapper, marginBottom: index + 1 == exercise.sets.length ? 0 : 8 }}>
                                        <Text style={workoutStyles.setText}>{aSet.weight} X {aSet.repetition} ({aSet.unit == "pounds" ? "LBS" : "KG"})</Text>
                                    </View>
                                })}
                            </View>
                        </View>
                        <View>
                            <View>
                                <View>
                                    <View style={workoutStyles.setTextWrapper}>
                                        <Text style={workoutStyles.setText}>Previous Sets</Text>
                                    </View>
                                </View>
                                <View >
                                    {exercise.previous_sets.map((aSet, index) => {
                                        return <View key={index} style={{ ...workoutStyles.setTextWrapper, marginBottom: index + 1 == exercise.sets.length ? 0 : 8, paddingHorizontal: 0, alignSelf: "center" }}>
                                            <Text style={workoutStyles.setText}>{aSet.weight} X {aSet.repetition} ({aSet.unit == "pounds" ? "LBS" : "KG"})</Text>
                                        </View>
                                    })}
                                </View>
                            </View>
                        </View>
                        <View>
                            <View >
                                <View style={workoutStyles.setTextWrapper}>
                                    <Text style={workoutStyles.setText}>1RM</Text>
                                </View>
                                <View style={workoutStyles.setWrapper}>
                                    {exercise.sets.map((aSet, index) => {
                                        return <View key={index} style={{ ...workoutStyles.setTextWrapper, marginBottom: index + 1 == exercise.sets.length ? 0 : 8 }}>
                                            <Text style={workoutStyles.setText}>{Math.round(aSet.max)} {"LBS"}</Text>
                                        </View>
                                    })}
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{ ...workoutStyles.exerciseTextWrap, paddingLeft: 10 }}>
                        <Text style={workoutStyles.exerciseText}>{index + 1}</Text>
                    </View> */}
                </View>
            }) :
                null}
        </ScrollView>
    )


    return (
        <View style={workoutStyles.root}>
            <NavigationEvents onWillFocus={payload => state.workoutReducer.workoutInProgress ? null : navigation.navigate("Body")} />
            {state.workoutReducer.loading ?
                <Spinner />
                :
                <>
                    <RecordedWorkout />
                    <View style={workoutStyles.buttonWrap}>
                        <Button onPress={() => toggleOverlay()} title="Complete Workout" buttonStyle={{ backgroundColor: "dodgerblue", borderRadius: 15 }} />
                        <Button onPress={() => nextExerciseHandler()} title="Next Exercise" buttonStyle={{ backgroundColor: "green", borderRadius: 15 }} />
                    </View>
                    <Overlay overlayStyle={{ width: "90%" }} isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View>
                            <View style={{ marginTop: 10 }}><Text style={autoInputStyles.overlayTitle}>Are you sure you want to finish your workout?</Text></View>
                            <View style={autoInputStyles.completeWorkoutWrap}>
                                <TouchableOpacity onPress={() => toggleOverlay()} style={autoInputStyles.overlayButton}>
                                    <Text style={autoInputStyles.workoutText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => completeHandler()} style={autoInputStyles.overlayButton}>
                                    <Text style={autoInputStyles.workoutText}>Finish Workout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Overlay>
                    {/* <CompleteWorkoutOverlay completeWorkoutHandler={completeHandler} visible={visible} toggleOverlay={toggleOverlay} /> */}
                </>
            }
        </View>
    );
};

export default Workout;