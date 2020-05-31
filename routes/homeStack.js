import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation'
import ExerciseOptions from '../screens/workout/ExerciseOptions';
import Exercise from '../screens/exercise/Exercise'
import ExerciseSet from '../screens/exercise/ExerciseSet'
import Workout from '../screens/workout/Workout'
import Dashboard from '../screens/stats/Dashboard'
import ExerciseStats from '../screens/stats/ExerciseStats'
import WorkoutStats from '../screens/stats/WorkoutStats'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';


const screens = {
    Body: {
        screen: ExerciseOptions
    },
    Exercise: {
        screen: Exercise
    },
    ExerciseSet: {
        screen: ExerciseSet
    },
    Workout: {
        screen: Workout
    }

}

const UserStats = {
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

const WorkoutStack = createStackNavigator(screens);
const StatStack = createStackNavigator(UserStats);


const DashboardTabScreen = createBottomTabNavigator(
    {
        Workout: {
            screen: WorkoutStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name="walking" size={20} color={tintColor} />
                )
            }),
        },
        Stats: {
            screen: StatStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ tintColor }) => (
                    <Fontisto name="line-chart" size={20} color={tintColor} />
                )
            }),
        },

    },
    {
        tabBarOptions: {
            inactiveTintColor: 'dodgerblue',
            activeTintColor: 'green',
            // activeBackgroundColor:'black',
            style: {
                fontSize: 32,
                paddingVertical: 3
            }
        }
    }
);




export default createAppContainer(DashboardTabScreen)