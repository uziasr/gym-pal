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
            <Text>{exerciseData.total_sets} {exerciseData.average_reps} {exerciseData.average_weight}</Text>
        </View>
    ):<View><Text>Loading...</Text></View>;
    // return <View></View>
};

export default ExerciseStats;