import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';


const ExerciseStats = ({navigation}) => {
    const exercise = navigation.state.params
    console.log(exercise)
    const [exerciseData, setExerciseData] = useState({})

    useEffect(()=>{
        axios.get(`http://192.168.1.3:5000/user/1/exercise/${exercise.id }`)
        .then(res=>setExerciseData(res.data))
        .catch(err=>console.log(err))
    },[])

    return Object.keys(exerciseData).length > 0? (
        <View>
            <Text>Total Sets {exerciseData.total_sets} Average Reps {exerciseData.average_reps} Average Weight{exerciseData.average_weight}</Text>
            <Text>Max Reps: {exerciseData.max_reps.repetition} at {exerciseData.max_reps.weight}</Text>
            <Text>Max Weight: {exerciseData.max_weight.weight} at {exerciseData.max_weight.repetition}</Text>
            <Text>Projected One Rep Max: {exerciseData.projected_one_rep.max_weight} from lifting {exerciseData.projected_one_rep.weight} for {exerciseData.projected_one_rep.reps} reps </Text>
        </View>
    ):<View><Text>Loading...</Text></View>;
    // return <View></View>
};

export default ExerciseStats;