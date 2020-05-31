import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { contributionViewStyles } from '../../styles/index'

const ContributionView = ({ workouts, date, navigation }) => {

    const formatSeconds = (seconds) => {
        // to format time under 24 hours from seconds
        return new Date(1000 * seconds).toISOString().substr(11, 8)
    }

    const formatDate = (date) => {
        const dateArr = date.split('-')
        const aDate = new Date()
        aDate.setMonth(dateArr[1] - 1)
        const month = (aDate.toLocaleString('default', { month: 'long' })).split(' ')[1]
        return `${month} ${dateArr[2]}, ${dateArr[0]}`
    }

    const contributionViewStyles = StyleSheet.create({
        text: {
            color: 'black'
        }
    })

    return (
        <View>
            <View style={contributionViewStyles.rootWrap}>
                <Text style={contributionViewStyles.headerText}>{formatDate(date)}</Text></View>
            {workouts.map((workout, index) => {
                return <TouchableOpacity key={index} onPress={() => navigation.navigate('Workout Overview', workout)}>
                    <Card containerStyle={{ borderRadius: 5 }}>
                        <View style={contributionViewStyles.workoutDescription}>
                            <Text style={contributionViewStyles.text}>Workout {index + 1}</Text>
                            <Text style={contributionViewStyles.text}>Duration: {formatSeconds(workout.total_time)}</Text>
                        </View>
                        {workout.muscles[0] == "" ? null : <Text style={contributionViewStyles.text}>Muscles Trained:</Text>}
                        <View>
                            {workout.muscles[0] == "" ?
                                <View style={contributionViewStyles.withoutMuscle}>
                                    <AntDesign name="arrowright" size={24} color="black" />
                                </View>
                                :
                                <View style={contributionViewStyles.withMuscles}>
                                    {workout.muscles.map((muscle, index) => (
                                        <View key={index} style={contributionViewStyles.withoutMuscle}>
                                            <Text style={contributionViewStyles.text}>{muscle}</Text>
                                        </View>
                                    ))}
                                    <AntDesign name="arrowright" size={24} color="black" />
                                </View>
                            }
                        </View>
                    </Card>
                </TouchableOpacity>
            })}
        </View>
    );
};

export default ContributionView;