import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';


const ContributionView = ({ workouts, date }) => {

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

    const styles = StyleSheet.create({
        text: {
            color: 'black'
        }
    })

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ ...styles.text, color: 'white', fontSize: 24 }}>{formatDate(date)}</Text></View>
            {workouts.map((workout, index) => {
                return <Card key={index} containerStyle={{ borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Workout {index + 1}</Text>
                        <Text style={styles.text}>Duration: {formatSeconds(workout.total_time)}</Text>
                    </View>
                   {workout.muscles[0] == "" ? null: <Text style={styles.text}>Muscles Trained:</Text>}
                    <View>
                        {workout.muscles[0] == "" ?
                            <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                                <AntDesign name="arrowright" size={24} color="black" />
                            </View>
                            :
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                {workout.muscles.map((muscle, index) => (
                                    <View key={index} style={{flexDirection:'row', flexWrap:'wrap'}}><Text style={styles.text}>{muscle}</Text></View>
                                ))}
                                <AntDesign name="arrowright" size={24} color="black" />
                            </View>
                        }
                    </View>
                </Card>
            })}
        </View>
    );
};

export default ContributionView;