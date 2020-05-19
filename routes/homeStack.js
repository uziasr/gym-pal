import { createStackNavigator } from 'react-navigation-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation'
import ExerciseOptions from '../screens/workout/ExerciseOptions';
import Exercise from '../screens/exercise/Exercise'
import ExerciseSet from '../screens/exercise/ExerciseSet'
import Workout from '../screens/workout/Workout'
import Dashboard from '../screens/stats/Dashboard'
import ExerciseStats from '../screens/stats/ExerciseStats'
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

const UserStats = {
    OverallStats:{
        screen:Dashboard
    },
    ExerciseStats:{
        screen:ExerciseStats
    }
}

const WorkoutStack = createStackNavigator(screens);
const StatStack = createStackNavigator(UserStats);


const DashboardTabScreen = createBottomTabNavigator(
    {
        Workout: {
            screen: WorkoutStack
        },
        Stats:{
            screen: StatStack
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