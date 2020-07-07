import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { exerciseStatsStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getExerciseStats } from '../../state/actions/statsActions'
import Spinner from "../../utils/Spinner"




const ExerciseStats = ({ navigation }) => {
    const exercise = navigation.state.params

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getExerciseStats(state.reducer.token, exercise.id))
    }, [])

    const ValidResponse = () => (
        <View style={exerciseStatsStyles.root}>
            <View style={exerciseStatsStyles.titleWrap}>
                <Text style={exerciseStatsStyles.title}>{exercise.name}</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Projected One Rep Max</Text>
                <Text style={exerciseStatsStyles.statsText}> {Math.round(state.statsReducer.exerciseData.projected_one_rep.max_weight)}</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Based on</Text>
                <Text style={exerciseStatsStyles.statsText}>{state.statsReducer.exerciseData.projected_one_rep.weight} LBS X {state.statsReducer.exerciseData.projected_one_rep.reps} </Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Max Reps</Text>
                <Text style={exerciseStatsStyles.statsText}>{state.statsReducer.exerciseData.max_reps.repetition} Reps @ {state.statsReducer.exerciseData.max_reps.weight} LBS</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Max Weight</Text>
                <Text style={exerciseStatsStyles.statsText}>{state.statsReducer.exerciseData.max_weight.weight} LBS @ {state.statsReducer.exerciseData.max_weight.repetition} Reps</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Total Sets</Text>
                <Text style={exerciseStatsStyles.statsText}>{state.statsReducer.exerciseData.total_sets}</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Average Reps</Text>
                <Text style={exerciseStatsStyles.statsText}>{Math.round(state.statsReducer.exerciseData.average_reps)}</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Average Weight </Text>
                <Text style={exerciseStatsStyles.statsText}>{Math.round(state.statsReducer.exerciseData.average_weight)}</Text>
            </View>
        </View>
    )

    const InvalidResponse = () => (
        <View>
            <Text>There is no data for this exercise</Text>
        </View>
    )

    return (
        <>
            {
                state.statsReducer.loading || Object.keys(state.statsReducer.exerciseData).length == 0 ?
                    <Spinner /> : state.statsReducer.error == null && Object.keys(state.statsReducer.exerciseData).length < 0 ?
                        <InvalidResponse /> : <ValidResponse />
            }
        </>
    )
};

export default ExerciseStats;