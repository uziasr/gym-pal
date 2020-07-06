import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { exerciseStatsStyles } from '../../styles/index'



const ExerciseStats = ({ navigation }) => {
    const exercise = navigation.state.params

    const [exerciseData, setExerciseData] = useState({})

    useEffect(() => {
        axios.get(`http://192.168.1.3:5000/user/1/exercise/${exercise.id}`)
            .then(res => setExerciseData(res.data))
            .catch(err => console.log(err))
    }, [])

    const roundDown = (num) =>{
        const wholeNumber = Math.round(num)
        return  wholeNumber - (wholeNumber % 5) 
        // {exerciseData.projected_one_rep.max_weight % 5 == 0 ? exerciseData.projected_one_rep.max_weight : roundDown(exerciseData.projected_one_rep.max_weight)}
    }
    
    return Object.keys(exerciseData).length > 0 ? (
        <View style={exerciseStatsStyles.root}>
            <View style={exerciseStatsStyles.titleWrap}>
                <Text style={exerciseStatsStyles.title}>{exercise.name}</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Projected One Rep Max</Text>
                <Text style={exerciseStatsStyles.statsText}> {Math.round(exerciseData.projected_one_rep.max_weight)}</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Based on</Text>
                <Text style={exerciseStatsStyles.statsText}>{exerciseData.projected_one_rep.weight} LBS X {exerciseData.projected_one_rep.reps} </Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Max Reps</Text>
                <Text style={exerciseStatsStyles.statsText}>{exerciseData.max_reps.repetition} Reps @ {exerciseData.max_reps.weight} LBS</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Max Weight</Text>
                <Text style={exerciseStatsStyles.statsText}>{exerciseData.max_weight.weight} LBS @ {exerciseData.max_weight.repetition} Reps</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Total Sets</Text>
                <Text style={exerciseStatsStyles.statsText}>{exerciseData.total_sets}</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Average Reps</Text>
                <Text style={exerciseStatsStyles.statsText}>{Math.round(exerciseData.average_reps)}</Text>
            </View>
            <View style={exerciseStatsStyles.statsView}>
                <Text style={exerciseStatsStyles.statsText}>Average Weight </Text>
                <Text style={exerciseStatsStyles.statsText}>{Math.round(exerciseData.average_weight)}</Text>
            </View>
        </View>
    ) : <View><Text style={exerciseStatsStyles.statsText}>Loading...</Text></View>;
};

export default ExerciseStats;