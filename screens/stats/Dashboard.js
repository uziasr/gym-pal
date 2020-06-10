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
import { dashBoardStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"



const Dashboard = ({ navigation }) => {

    const userId  = useSelector(state=> state.userId, shallowEqual)
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
    const dropDownHandler = (name) => {
        setDropActive({ ...dropActive, [name]: !dropActive[name] })
        if (name == 'workouts' && serverCalled[name] == false) {
            axios.get(`http://192.168.1.3:5000/user/1/${name}`)
                .then(res => {
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
        if (contribution.count !== 0) {
            if (contribution.date == currentDate) {
                setWorkoutDisplay(!workoutDisplay)
                setCurrentDate("")
                setVisible(() => false)
            } else {
                axios.post(`http://192.168.1.3:5000/user/1/workouts`, { date: contribution.date })
                    .then(res => {
                        setVisible(() => {
                            setWorkoutByDate([...res.data])
                            setCurrentDate(contribution.date)
                            setWorkoutDisplay(true)
                            return false
                        })

                    })
                    .catch(err => console.log(err))
            }
        }
    }


    return (
        <View style={dashBoardStyles.rootView}>
            <ScrollView>
                <View style={dashBoardStyles.contributionTitleWrap}>
                    <Text style={dashBoardStyles.title}>{dashData.total_workouts} Total Workout{dashData.total_workouts ? 's' : ''}!</Text>
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
                        <ContributionView workouts={workoutByDate} date={currentDate} navigation={navigation} />
                    </View> : null}
                <View style={dashBoardStyles.statsDropDownWrap}>
                    <Button title='Previous Workouts' onPress={() => toggleOverlay()} />
                    <Overlay overlayStyle={{ width: '90%', height: 400 }} isVisible={visible} onBackdropPress={toggleOverlay}>
                        <WorkoutCalendar dates={dashData.dates} dayPressHandler={dayPressHandler} currentDate={currentDate} />
                    </Overlay>
                    <ScrollView>
                        <TouchableOpacity onPress={() => dropDownHandler('exercises')} style={dashBoardStyles.statsDropDownStyle}>
                            <Text style={dashBoardStyles.statsTitleStyle}>My Exercises</Text>
                            <AntDesign name={!dropActive.exercises ? "caretdown" : "caretup"} size={24} color="white" />
                        </TouchableOpacity>
                        {dropActive.exercises ? dashData.exercises.map(exercise => (
                            <View style={dashBoardStyles.selectableStatsWrap} key={exercise.id}>
                                <TouchableOpacity style={dashBoardStyles.exercisesView} onPress={() => pressHandler(exercise)}>
                                    <Text>{exercise.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )) : null}
                    </ScrollView>
                </View>
                {/* Could be its own component! */}
                <View style={dashBoardStyles.statsDropDownWrap}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => dropDownHandler('workouts')} style={dashBoardStyles.statsDropDownStyle}>
                            <Text style={dashBoardStyles.statsTitleStyle}>My Workouts</Text>
                            <AntDesign name={!dropActive.workouts ? "caretdown" : "caretup"} size={24} color="white" />
                        </TouchableOpacity>
                        {dropActive.workouts ? allWorkouts.map((workout, index) => (
                            <View style={dashBoardStyles.selectableStatsWrap} key={workout.id}>
                                <TouchableOpacity onPress={() => navigation.navigate('Workout Overview', workout)} style={dashBoardStyles.exercisesView}>
                                    <Text>Workout {index + 1}</Text>
                                    <Text>{workout.start_time.split(' ').slice(0, 4).join(' ')}</Text>
                                </TouchableOpacity>
                            </View>
                        )) : null}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

export default Dashboard;