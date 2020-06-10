import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'
import Switches from 'react-native-switches'
import SetForm from './SetForm'
import axios from 'axios'
import Sets from './Sets'
import { exerciseSetStyles } from '../../styles/index'

const ExerciseSet = ({ navigation }) => {

    const currentExercise = navigation.state.params.exercise
    const [switchValue, setUnit] = useState(true)
    const [exerciseSet, setExerciseSet] = useState({ [currentExercise]: [] })
    const [workoutId, setWorkoutId] = useState()

    const capitalize = (words) => {
        return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    }

    const addSet = async (set) => {
        let currentWorkoutId;
        const formattedSet = { weight: set.weight, repetition: set.reps, unit: switchValue ? 'pounds' : 'kilograms' }
        if (exerciseSet[currentExercise].length == 0) {
           const res = await axios.post(`http://192.168.1.3:5000//workout/${8}/exercise`, { exercise: currentExercise })
            currentWorkoutId = res.data.id
           setWorkoutId(() => res.data.id)
        }
        console.log("this is the ID that I need", workoutId)
        axios.post(`http://192.168.1.3:5000//workout/exercise/${ workoutId || currentWorkoutId}/set`, formattedSet)
            .then(res=>console.log(res.data))
            .catch(err => console.log(err))

        setExerciseSet(() => {
            return { [currentExercise]: [...exerciseSet[currentExercise], formattedSet] }
        })
    }

    return (
        <View>
            <View style={exerciseSetStyles.titleWrap}>
                <Text style={exerciseSetStyles.title}>{capitalize(currentExercise)}</Text>
            </View>
            <View style={exerciseSetStyles.unitWrap}>
                <View style={exerciseSetStyles.unit}>
                    <Text style={exerciseSetStyles.unitText}>Unit of Weight</Text>
                    <Switches color='#353A47' colorTextOff='#353A47' colorTextOn='#353A47' textSize={24} borderColor='#353A47' buttonColor='#353A47' shape={'line'} textFont={'normal'} value={!switchValue} onChange={() => { setUnit(!switchValue) }} animationDuration={125} textOff={'lb'} textOn={'kg'} />
                </View>
            </View>
            <View>
                <SetForm addSet={addSet} />
            </View>
            <View style={exerciseSetStyles.scrollWrap}>
                <ScrollView>
                    {exerciseSet[currentExercise].length > 0 ? exerciseSet[currentExercise].map((exerciseSet, index) => <Sets key={index + 1} order={index + 1} exerciseSet={exerciseSet} />) : null}
                </ScrollView>
            </View>
            <View>
                <Button title='Complete' disabled={!exerciseSet[currentExercise].length} onPress={() => { navigation.navigate('Workout', {id: workoutId}) }} buttonStyle={{ backgroundColor: '#18A558' }} />
            </View>
        </View>
    );
};
export default ExerciseSet;
