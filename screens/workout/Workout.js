import React from 'react';
import { View, Text } from 'react-native';

const Workout = ({ navigation }) => {
    const exerciseSet = navigation.state.params
    const allExercise = Object.keys(exerciseSet)
    return (
        <View>
            {allExercise.map((exercise, index)=>(
                <Text key={index}>{exercise} for {exerciseSet[exercise].length} sets</Text>
            ))}
        </View>
    );
};

export default Workout;