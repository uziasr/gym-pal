import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import ExerciseOptions from '../screens/workout/ExerciseOptions';
import Exercise from '../screens/exercise/Exercise'
import ExerciseSet from '../screens/exercise/ExerciseSet'
import Workout from '../screens/workout/Workout'
import Dashboard from '../screens/stats/Dashboard'
import ExerciseStats from '../screens/stats/ExerciseStats'
import WorkoutStats from '../screens/stats/WorkoutStats'
import Auth from '../screens/authenticate/Auth'
import { Schedule, WorkoutTemplate, ScheduleForm, Home } from '../screens/home/index'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5, MaterialIcons, Foundation, Ionicons } from '@expo/vector-icons';


const screens = {
    Body: {
        screen: ExerciseOptions
    },
    Exercise: {
        screen: Exercise
    },
    Sets: {
        screen: ExerciseSet
    },
    Workout: {
        screen: Workout
    }

}

const userStatScreens = {
    "Overall Stats": {
        screen: Dashboard
    },
    "Exercise Stats": {
        screen: ExerciseStats
    },
    "Workout Overview": {
        screen: WorkoutStats
    }
}

const authorization = {
    "On Board": {
        screen: Auth
    },
}

const homeScreens = {
    Home:{
        screen: Home
    },
    Schedule: {
        screen: Schedule
    },
    "Schedule Workout": {
        screen: ScheduleForm
    }
}

const WorkoutStack = createStackNavigator(screens);
const StatStack = createStackNavigator(userStatScreens);
const AuthStack = createStackNavigator(authorization)
const HomeStack = createStackNavigator(homeScreens)


const DashboardTabScreen = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-home" size={34} color={tintColor} />
                ),
            })
        },
        Stats: {
            screen: StatStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ tintColor }) => (
                    <Foundation name="graph-pie" size={32} color={tintColor} />
                )
            }),
        },
        Workout: {
            screen: WorkoutStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name="walking" size={28} color={tintColor} />
                ),
            }),
        },
        Account: {
            screen: AuthStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name="person" size={34} color={tintColor} />
                ),
                tabBarVisible: false
            })
        },
    },
    {
        tabBarOptions: {
            inactiveTintColor: 'darkgrey',
            activeTintColor: 'dodgerblue',
            // activeBackgroundColor:'black',
            style: {
                fontSize: 32,
                paddingVertical: 6,
                justifyContent: 'space-between',
            }
        }
    }
);




export default createAppContainer(DashboardTabScreen)