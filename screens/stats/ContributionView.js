import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { contributionViewStyles } from '../../styles/index'
import { Ionicons } from '@expo/vector-icons';

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

    return (
        <View>
            <View style={contributionViewStyles.rootWrap}>
                <Text style={contributionViewStyles.headerText}>{formatDate(date)}</Text>
            </View>
            {workouts.map((workout, index) => {
                return <TouchableOpacity style={contributionViewStyles.touchableWorkoutWrapper} key={index} onPress={() => navigation.navigate('Workout Overview', workout)}>
                    <Card containerStyle={contributionViewStyles.workoutCard}>
                        <View style={contributionViewStyles.workoutDescription}>
                            <Ionicons style={contributionViewStyles.iconStyle} name="md-fitness" size={60} color="black" />
                            <View style={contributionViewStyles.workoutView}>
                                <Text style={contributionViewStyles.text}>Workout {index + 1}</Text>
                                <View style={contributionViewStyles.durationStyle}>
                                    <Text style={contributionViewStyles.text}>Duration: {formatSeconds(workout.total_time)}</Text>
                                    <AntDesign name="arrowright" size={24} color="black" />
                                </View>
                                {workout.muscles[0] == "" ?
                                    null
                                    :
                                    <View style={contributionViewStyles.withMuscles}><Text>| </Text>
                                        {workout.muscles.map((muscle, index) => (
                                            <View key={index} style={contributionViewStyles.withoutMuscle}>
                                                <Text style={contributionViewStyles.text}>{muscle}</Text><Text> |</Text>
                                            </View>
                                        ))}
                                        {/* <AntDesign name="arrowright" size={24} color="black" /> */}
                                    </View>
                                }
                            </View>
                        </View>
                        {/* {workout.muscles[0] == "" ? null : <Text style={contributionViewStyles.text}>Muscles Trained:</Text>} */}
                    </Card>
                </TouchableOpacity>
            })}
        </View>
    );
};

export default ContributionView;