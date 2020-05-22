import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons'; 

import {
    // LineChart,
    // BarChart,
    // PieChart,
    // ProgressChart,
    ContributionGraph,
    // StackedBarChart
} from "react-native-chart-kit";


const Dashboard = ({ navigation }) => {

    const [dashData, setDashData] = useState({
        dates: [],
        exercise: [],
        total_workouts: 0
    })

    const [dropActive, setDropActive] = useState({
        exercises: false,
        workout: false
    })

    const [serverCalled, setServerCalled] = useState({
        exercises:false,
        workout: false
    })

    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            color: 'white',
            textAlign: 'center'
        },
        rootView: {
            backgroundColor: 'grey',
            flexDirection: 'column',
            // justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#2d2d2d'
        },
        exercisesView: {
            width: '98%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderRadius: 15,
            marginVertical: 5,
            backgroundColor: 'white'
        }
    })


    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.25,
        color: (opacity = .5) => `rgba(	30, 144, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const screenWidth = Dimensions.get("window").width;

    useEffect(() => {
        axios.get("http://192.168.1.3:5000/user/1/exercise")
            .then(res => setDashData({ ...res.data }))
            .catch(err => console.log(err))
    }, [])

    const getExerciseFrequencyByDate = (dateArray) => {
        dateDict = {}
        dateList = []
        dateArray.forEach(date => {
            dateDict[date] = dateDict[date] ? dateDict[date] + 1 : 1
        })
        Object.keys(dateDict).forEach(date => {
            dateList.push({ date: date, count: dateDict[date] })
        })
        return dateList

    }
    const dropDownHandler = (name) =>{
        setDropActive({...dropActive, [name]: !dropActive[name] })
    }

    const pressHandler = (exercise) => {
        navigation.navigate('Exercise Stats', exercise)
    }

    return (
        <View style={styles.rootView}>
            <View style={{ marginVertical: 15, color: 'white', justifyContent: 'center' }}>
                <Text style={styles.title}>{dashData.total_workouts} Total Workout{dashData.total_workouts ? 's' : ''}!</Text>
                <ContributionGraph
                    values={[{ date: '2020-01-01', count: 0 }, ...getExerciseFrequencyByDate(dashData.dates)]}
                    endDate={new Date()}
                    numDays={105}
                    height={220}
                    chartConfig={chartConfig}
                    width={screenWidth}
                />
            </View>
            <View style={{ width: '100%' }}>
                <View>
                    <TouchableOpacity onPress={()=>dropDownHandler('exercises')} style={{ paddingHorizontal:15, display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'center', alignItems:'center' }}>
                        <Text style={{ fontSize: 24, color: 'white' }}>Analyze By Exercise</Text>
                        <AntDesign name={!dropActive.exercises?"caretdown":"caretup"} size={24} color="white" />
                    </TouchableOpacity>
                    {dropActive.exercises ? dashData.exercises.map(exercise => (
                        // <View style={styles.exercisesView}>
                        <TouchableOpacity style={styles.exercisesView} onPress={() => pressHandler(exercise)} key={exercise.id}>
                            <Text>{exercise.name}</Text>
                        </TouchableOpacity>
                        // </View>
                    )) : null}
                </View>
            </View>
        </View>
    );
};

export default Dashboard;