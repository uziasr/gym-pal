import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { workoutStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getWorkoutById, completeWorkout } from "../../state/actions/workoutActions"
import { NavigationEvents } from 'react-navigation';
import CompleteWorkoutOverlay from "../../components/CompleteWorkoutOverlay"
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
                        <Text style={workoutStyles.exerciseText}>{exercise.exercise}</Text>
                    </View>
                    <View style={workoutStyles.setWrapper}>
                        {exercise.sets.map((aSet, index) => {
                            return <View key={index} style={{ ...workoutStyles.setTextWrapper, backgroundColor: aSet.unit == "pounds" ? "dodgerblue" : "green", marginBottom: index + 1 == exercise.sets.length ? 0 : 8 }}>
                                <Text style={workoutStyles.setText}>{aSet.weight} X {aSet.repetition} ({aSet.unit == "pounds" ? "LBS" : "KG"})</Text>
                            </View>
                        })}
                    </View>
                    <View style={{ ...workoutStyles.exerciseTextWrap, paddingLeft: 10 }}>
                        <Text style={workoutStyles.exerciseText}>{index + 1}</Text>
                    </View>
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
                    <Button onPress={() => nextExerciseHandler()} title="Next Exercise" buttonStyle={{ backgroundColor: "green", marginVertical: 5 }} />
                    <CompleteWorkoutOverlay completeWorkoutHandler={completeHandler} visible={visible} toggleOverlay={toggleOverlay} />
                    <Button onPress={() => toggleOverlay()} title="Complete Workout" buttonStyle={{ backgroundColor: "dodgerblue" }} />
                </>
            }
        </View>
    );
};

export default Workout;