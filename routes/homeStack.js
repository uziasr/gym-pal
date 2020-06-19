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
import SignIn from '../screens/authenticate/SignIn'
import SignUp from '../screens/authenticate/SingUp'
import Auth from '../screens/authenticate/Auth'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import { loggedIn } from '../utils/index'
import AsyncStorage from '@react-native-community/async-storage';


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

const authorization = {
    "On Board": {
        screen: Auth
    },
    // "Login":{
    //     screen:SignIn
    // },
    // "Sign Up": {
    //     screen: SignUp
    // },
}

const WorkoutStack = createStackNavigator(screens);
const StatStack = createStackNavigator(UserStats);
const AuthStack = createStackNavigator(authorization)


const DashboardTabScreen = createBottomTabNavigator(
    {
        Stats: {
            screen: StatStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ tintColor }) => (
                    <Fontisto name="line-chart" size={20} color={tintColor} />
                )
            }),
        },
        Workout: {
            screen: WorkoutStack,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome5 name="walking" size={20} color={tintColor} />
                ),
            }),
        },
        Account: {
            screen: loggedIn ? AuthStack : AuthStack,
            navigationOptions: ({ navigation }) => ({
                tabBarVisible: false
            })
        }
    },

    {
        tabBarOptions: {
            inactiveTintColor: 'dodgerblue',
            activeTintColor: 'green',
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