import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExerciseOptions from '../screens/workout/ExerciseOptions';
import Exercise from '../screens/exercise/Exercise'
import ExerciseSet from '../screens/exercise/ExerciseSet'
import Workout from '../screens/workout/Workout'
import Navigator from './Navigator'

const Tab = createBottomTabNavigator()
export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Body" component={ExerciseOptions} />
                <Tab.Screen name="Exercise" component={Exercise} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}