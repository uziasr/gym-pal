import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons';
import { Overlay, Button } from 'react-native-elements'


import {
    // LineChart,
    // BarChart,
    // PieChart,
    // ProgressChart,
    ContributionGraph,
    // StackedBarChart
} from "react-native-chart-kit";
import WorkoutCalendar from './WorkoutCalendar';
import ContributionView from './ContributionView';


const Dashboard = ({ navigation }) => {

    const [dashData, setDashData] = useState({
        dates: [],
        exercise: [],
        total_workouts: 0
    })

    const [visible, setVisible] = useState(false)

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const [allWorkouts, setAllWorkouts] = useState([])

    const [dropActive, setDropActive] = useState({
        exercises: false,
        workouts: false
    })

    const [serverCalled, setServerCalled] = useState({
        exercises: false,
        workouts: false
    })

    const [workoutByDate, setWorkoutByDate] = useState([])
    const [currentDate, setCurrentDate] = useState("")
    const [workoutDisplay, setWorkoutDisplay] = useState(false)

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
        console.log('dateArr', dateArray)
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
    const dropDownHandler = (name) => {
        setDropActive({ ...dropActive, [name]: !dropActive[name] })
        if (name == 'workouts' && serverCalled[name] == false) {
            axios.get(`http://192.168.1.3:5000/user/1/${name}`)
                .then(res => {
                    console.log("good time", res.data[0].start_time.day)
                    setAllWorkouts([...res.data])
                    setServerCalled(() => {
                        return { ...serverCalled, [name]: true }
                    })
                })
                .catch(err => console.log(err))
        }
    }

    const pressHandler = (exercise) => {
        navigation.navigate('Exercise Stats', exercise)
    }

    const dayPressHandler = (contribution) => {
        if (contribution.count) {
            if (contribution.date == currentDate) {
                setWorkoutDisplay(!workoutDisplay)
            } else {
                axios.post(`http://192.168.1.3:5000/user/1/workouts`, { date: contribution.date })
                    .then(res => {
                        setWorkoutByDate([...res.data])
                        setCurrentDate(contribution.date)
                    })
                    .catch(err => console.log(err))
            }
        }
    }


    return (
        <View style={styles.rootView}>
            <ScrollView>
                <View style={{ marginVertical: 15, color: 'white', justifyContent: 'center' }}>
                    <Text style={styles.title}>{dashData.total_workouts} Total Workout{dashData.total_workouts ? 's' : ''}!</Text>
                    <ContributionGraph
                        values={[{ date: '2020-01-01', count: 0 }, ...getExerciseFrequencyByDate(dashData.dates)]}
                        endDate={new Date()}
                        numDays={105}
                        height={220}
                        chartConfig={chartConfig}
                        width={screenWidth}
                        onDayPress={(contribution) => dayPressHandler(contribution)}
                    />
                </View>
                {workoutDisplay && workoutByDate.length > 0 ?
                    <View>
                        <ContributionView workouts={workoutByDate} date={currentDate} />
                    </View> : null}
                <View style={{ width: '100%' }}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => dropDownHandler('exercises')} style={{ paddingBottom: 5, marginBottom: 5, paddingHorizontal: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 0.5 }}>
                            <Text style={{ fontSize: 24, color: 'white' }}>My Exercises</Text>
                            <AntDesign name={!dropActive.exercises ? "caretdown" : "caretup"} size={24} color="white" />
                        </TouchableOpacity>
                        {dropActive.exercises ? dashData.exercises.map(exercise => (
                            // <View style={styles.exercisesView}>
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} key={exercise.id}>
                                <TouchableOpacity style={styles.exercisesView} onPress={() => pressHandler(exercise)}>
                                    <Text>{exercise.name}</Text>
                                </TouchableOpacity>
                            </View>
                            // </View>
                        )) : null}
                    </ScrollView>
                </View>
                {/* Could be its own component! */}
                <View style={{ width: '100%' }}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => dropDownHandler('workouts')} style={{ paddingBottom: 5, marginBottom: 5, paddingHorizontal: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 0.5 }}>
                            <Text style={{ fontSize: 24, color: 'white' }}>My Workouts</Text>
                            <AntDesign name={!dropActive.workouts ? "caretdown" : "caretup"} size={24} color="white" />
                        </TouchableOpacity>
                        {dropActive.workouts ? allWorkouts.map((workout, index) => (
                            // <View style={styles.exercisesView}>
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} key={workout.id}>
                                <TouchableOpacity onPress={() => navigation.navigate('Workout Overview', workout)} style={styles.exercisesView}>
                                    <Text>Workout {index + 1}</Text>
                                    <Text>{workout.start_time.split(' ').slice(0, 4).join(' ')}</Text>
                                </TouchableOpacity>
                            </View>
                            // </View>
                        )) : null}
                    </ScrollView>
                </View>
                <Button title='Workout History' onPress={() => toggleOverlay()} />
                <Overlay overlayStyle={{ width: '90%', height: 400 }} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <WorkoutCalendar dates={dashData.dates} />
                </Overlay>
            </ScrollView>
        </View>
    );
};

export default Dashboard;