import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';


const ExerciseStats = ({ navigation }) => {
    const exercise = navigation.state.params
    console.log(exercise)
    const [exerciseData, setExerciseData] = useState({})

    useEffect(() => {
        axios.get(`http://192.168.1.3:5000/user/1/exercise/${exercise.id}`)
            .then(res => setExerciseData(res.data))
            .catch(err => console.log(err))
    }, [])

    const styles = StyleSheet.create({
        root: {
            backgroundColor: 'grey',
            flexDirection: 'column',
            // justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor:'#2d2d2d'
        },
        statsView: {
            width: '98%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderRadius: 15,
            marginVertical: 5,
            backgroundColor: 'white'
        },
        statsText:{
            fontWeight: 'bold'
        }
    })

    return Object.keys(exerciseData).length > 0 ? (
        <View style={styles.root}>
            <View>
                <Text style={{ fontSize: 24, color:'white' }}>{exercise.name}</Text>
            </View>
            <View style={styles.statsView}>
                <Text style={styles.statsText}>Projected One Rep Max:</Text>
                <Text style={styles.statsText}> {exerciseData.projected_one_rep.max_weight}</Text>
            </View>
            <View style={styles.statsView}>
                <Text style={styles.statsText}>Based on</Text>
                <Text style={styles.statsText}>{exerciseData.projected_one_rep.weight} X {exerciseData.projected_one_rep.reps} </Text>
            </View>
            <View style={styles.statsView}>
                <Text style={styles.statsText}>Max Reps</Text>
                <Text style={styles.statsText}>{exerciseData.max_reps.repetition} reps at {exerciseData.max_reps.weight} LBS</Text>
            </View>
            <View style={styles.statsView}>
                <Text style={styles.statsText}>Max Weight</Text>
                <Text style={styles.statsText}>{exerciseData.max_weight.weight} LBS at {exerciseData.max_weight.repetition} reps</Text>
            </View>
            <View style={styles.statsView}>
                <Text style={styles.statsText}>Total Sets</Text>
                <Text style={styles.statsText}>{exerciseData.total_sets}</Text>
            </View>
            <View style={styles.statsView}>
                <Text style={styles.statsText}>Average Reps</Text>
                <Text style={styles.statsText}>{exerciseData.average_reps}</Text>
            </View>
            <View style={styles.statsView}>
                <Text style={styles.statsText}>Average Weight </Text>
                <Text style={styles.statsText}>{exerciseData.average_weight}</Text>
            </View>
        </View>
    ) : <View><Text style={styles.statsText}>Loading...</Text></View>;
    // return <View></View>
};

export default ExerciseStats;