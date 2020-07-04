import React, { useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { workoutStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getWorkoutById, completeWorkout } from "../../state/actions/workoutActions"
import { NavigationEvents } from 'react-navigation';

const Workout = ({ navigation }) => {
    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWorkoutById(state.reducer.token, state.workoutReducer.workoutId))
    }, [])


    const nextExerciseHandler = () => {
        navigation.navigate("Exercise")
    }

    const completeHandler = () => {
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
           <NavigationEvents onWillFocus={payload => state.workoutReducer.workoutInProgress ? null: navigation.navigate("Body")} />
            {state.workoutReducer.loading ? <ActivityIndicator size="large" color="white" /> : <RecordedWorkout/>}
            <Button onPress={() => nextExerciseHandler()} title="Next Exercise" buttonStyle={{ backgroundColor: "green", marginVertical: 5 }} />
            <Button onPress={() => completeHandler()} title="Complete Workout" buttonStyle={{ backgroundColor: "dodgerblue" }} />
        </View>
    );
};

export default Workout;