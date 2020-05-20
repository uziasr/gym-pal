import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios'
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
        dates:[],
        exercise:[],
        total_workouts:0
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
        dateArray.forEach(date=>{
            dateDict[date] = dateDict[date] ? dateDict[date] + 1 : 1 
        })
        Object.keys(dateDict).forEach(date=>{
            dateList.push({date:date, count:dateDict[date]})
        })
        return dateList

    }

    const pressHandler = (exercise) =>{
        navigation.navigate('ExerciseStats',  exercise)
    }

    return (
        <>
            <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 50, alignContent: 'center', alignItems: 'center' }}>
                <Text>{dashData.total_workouts} workouts to date!</Text>
                <ContributionGraph
                    values={[{date:'2020-01-01', count:0},...getExerciseFrequencyByDate(dashData.dates)]}
                    endDate={new Date()}
                    numDays={105}
                    height={220}
                    chartConfig={chartConfig}
                    width={screenWidth}
                />
            </View>
            <View style={{flex:2, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <View>
                    <Text>Your Exercises, Analyze Them Further</Text>
                    {dashData.exercises ? dashData.exercises.map(exercise => (
                        <TouchableOpacity onPress={()=> pressHandler(exercise)} key={exercise.id}>
                            <Text>{exercise.name}</Text>
                        </TouchableOpacity>
                    )) : null}
                </View>
            </View>
        </>
    );
};

export default Dashboard;