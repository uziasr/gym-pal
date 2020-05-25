import React, { useState } from 'react';
import { View, Text } from 'react-native'

const ContributionView = ({ workouts, date }) => {

    const formatSeconds = (seconds) => {
        // to format time under 24 hours from seconds
        return new Date(1000 * seconds).toISOString().substr(11, 8)
    }

    const formatDate = (date) =>{
        const dateArr = date.split('-')
        const aDate = new Date()
        aDate.setMonth(dateArr[1] - 1)
        const month = (aDate.toLocaleString('default', { month: 'long' })).split(' ')[1]
        return `${month} ${dateArr[2]}, ${dateArr[0]}`
    }

    return (
        <View>
            <View style={{flexDirection:'row', justifyContent:'center'}}><Text>{formatDate(date)}</Text></View>
            {workouts.map(workout => {
                return <View style={{ height: 100 }}>
                    <Text>Duration: {formatSeconds(workout.total_time)}</Text>
                    <Text>Muscles Trained:</Text>
                    <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                        {workout.muscles.map(muscle => (
                            <Text>{muscle}</Text>
                        ))}
                    </View>
                </View>
            })}
        </View>
    );
};

export default ContributionView;