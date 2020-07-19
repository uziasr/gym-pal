import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
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
import { getToken } from '../../state/actions/index'
import { getDashData, getUserWorkout, getWorkoutByDate } from '../../state/actions/statsActions'
import { getExerciseInProgress, getWorkoutInProgress } from "../../state/actions/workoutActions"
import { NavigationEvents } from 'react-navigation';
import Spinner from "../../utils/Spinner"

const Dashboard = ({ navigation }) => {

    const state = useSelector(state => state, shallowEqual)

    const dispatch = useDispatch()

    const [visible, setVisible] = useState(false)

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const [dropActive, setDropActive] = useState({
        exercises: false,
        workouts: false
    })

    const [serverCalled, setServerCalled] = useState({
        exercises: false,
        workouts: false
    })

    const [currentDate, setCurrentDate] = useState("")
    const [rawDate, setRawDate] = useState("") // used to clear workouts
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
    () => navigation.addListener('focus', () => console.log('Screen was focused'))

    useEffect(() => {
        dispatch(getToken())
        dispatch(getDashData(state.reducer.token))
        // these next dispatches are put in place here to update the state for the user
        // since this is the landing screen for now
        dispatch(getExerciseInProgress(state.reducer.token))
        dispatch(getWorkoutInProgress(state.reducer.token))

    }, [state.reducer.token, state.workoutReducer.workoutInProgress])


    if(state.reducer.tokenError && !state.reducer.tokenOnLoading){
        navigation.navigate("On Board")
    }

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
            dispatch(getUserWorkout(state.reducer.token))
            setServerCalled(() => {
                return { ...serverCalled, [name]: true }
            })
        }
    }

    const pressHandler = (exercise) => {
        navigation.navigate('Exercise Stats', exercise)
    }
    const dayPressHandler = (contribution) => {
        setRawDate(contribution)
        if (contribution.count !== 0) {
            if (contribution.date == currentDate) {
                setWorkoutDisplay(!workoutDisplay)
                setCurrentDate("")
                setVisible(() => false)
            } else {
                dispatch(getWorkoutByDate(state.reducer.token, { date: contribution.date }))
                // below should be called under truthy circumstances
                setVisible(() => {
                    setCurrentDate(contribution.date)
                    setWorkoutDisplay(true)
                    return false
                })
            }
        }
    }


    const Dash = () => (
        <View style={dashBoardStyles.rootView}>
            <NavigationEvents
                onWillFocus={payload => dispatch(getDashData(state.reducer.token))}
                onDidFocus={payload => dispatch(getDashData(state.reducer.token))} />
            <ScrollView>
                <View style={dashBoardStyles.contributionTitleWrap}>
                    <Text style={dashBoardStyles.title}>{state.statsReducer.totalWorkouts} Total Workout{state.statsReducer.totalWorkouts ? 's' : ''}!</Text>
                    <ContributionGraph
                        values={[{ date: '2020-01-01', count: 0 }, ...getExerciseFrequencyByDate(state.statsReducer.dates)]}
                        endDate={new Date()}
                        numDays={105}
                        gutterSize={1.5}
                        height={220}
                        chartConfig={chartConfig}
                        width={screenWidth}
                        onDayPress={(contribution) => dayPressHandler(contribution)}
                    />
                </View>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Button title='📅 Workouts by Date 📅' buttonStyle={{ width: "85%", alignSelf: "center", backgroundColor: "#1E90FF", borderRadius: 20 }} onPress={() => toggleOverlay()} />
                    <Button disabled={!currentDate} title="Clear Workout(s)" buttonStyle={{ alignSelf: "center", backgroundColor: "#1E90FF", borderRadius: 20 }} onPress={() => dayPressHandler(rawDate)} />
                </View>
                <Overlay overlayStyle={{ width: '90%', height: 400 }} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <WorkoutCalendar dates={state.statsReducer.dates} dayPressHandler={dayPressHandler} currentDate={currentDate} />
                </Overlay>
                {workoutDisplay && state.statsReducer.workoutByDate.length > 0 ?
                    <View>
                        <ContributionView workouts={state.statsReducer.workoutByDate} date={currentDate} navigation={navigation} />
                    </View> : null}
                <View style={dashBoardStyles.statsDropDownWrap}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => dropDownHandler('exercises')} style={dashBoardStyles.statsDropDownStyle}>
                            <Text style={dashBoardStyles.statsTitleStyle}>My Exercises</Text>
                            <AntDesign name={!dropActive.exercises ? "caretdown" : "caretup"} size={24} color="white" />
                        </TouchableOpacity>
                        {dropActive.exercises ? state.statsReducer.exercises.map(exercise => (
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
                        {dropActive.workouts ? state.statsReducer.allWorkouts.map((workout, index) => (
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
    )

    return (
        <>
           {state.reducer.tokenOnLoading || !state.workoutReducer.workoutFetched && !state.workoutReducer.exerciseFetched ? <Spinner/> : <Dash />}
        </>
    );
};

export default Dashboard;