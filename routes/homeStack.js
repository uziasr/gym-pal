import { createStackNavigator } from 'react-navigation-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation'
import ExerciseOptions from '../screens/workout/ExerciseOptions';
import Exercise from '../screens/exercise/Exercise'
import ExerciseSet from '../screens/exercise/ExerciseSet'
import Workout from '../screens/workout/Workout'
import Dashboard from '../screens/stats/Dashboard'
import { createBottomTabNavigator } from 'react-navigation-tabs';

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

const WorkoutStack = createStackNavigator(screens);

const DashboardTabScreen = createBottomTabNavigator(
    {
        Workout: {
            screen: WorkoutStack
        },
        Stats:{
            screen: Dashboard
        }

    },
    {
        tabBarOptions: {
            inactiveTintColor: 'dodgerblue',
            activeTintColor: 'green',
            // activeBackgroundColor:'black',
            style: {
                fontSize:32
            }
        }
    }
);




export default createAppContainer(DashboardTabScreen)