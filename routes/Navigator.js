import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExerciseOptions from '../screens/workout/ExerciseOptions';
import Exercise from '../screens/exercise/Exercise'
import ExerciseSet from '../screens/exercise/ExerciseSet'
import Workout from '../screens/workout/Workout'


const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Body' component={ExerciseOptions} />
                <Stack.Screen name='Exercise' component={Exercise} />
                <Stack.Screen name='ExerciseSet' component={ExerciseSet} />
                <Stack.Screen name='Workout' component={Workout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


