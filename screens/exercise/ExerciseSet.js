import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import Switches from 'react-native-switches'
import SetForm from './SetForm'
import Sets from './Sets'
import { exerciseSetStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { addSet, completeSet } from '../../state/actions/workoutActions'

const ExerciseSet = ({ navigation }) => {

    const currentExercise = navigation.state.params.exercise
    const [switchValue, setUnit] = useState(true)
    const [exerciseSet, setExerciseSet] = useState(navigation.state.params.sets || {[currentExercise]: []})
    


    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

    const capitalize = (words) => {
        return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    }

    const addWorkoutSet = (set) => {
        const formattedSet = { weight: set.weight, repetition: set.reps, unit: switchValue ? 'pounds' : 'kilograms' }
        dispatch(addSet(state.reducer.token, state.workoutReducer.workoutExerciseId, formattedSet))

        setExerciseSet(() => {
            return { [currentExercise]: [...exerciseSet[currentExercise], formattedSet] }
        })
    }

    const completeExercise = () => {
        setExerciseSet({[currentExercise]: []})
        dispatch(completeSet(state.reducer.token, state.workoutReducer.workoutExerciseId))
        navigation.navigate('Workout')
    }

    return (
        <View style={exerciseSetStyles.rootWrap}>
            <View style={exerciseSetStyles.titleWrap}>
                <Text style={exerciseSetStyles.title}>{capitalize(currentExercise)}</Text>
            </View>
            <View style={exerciseSetStyles.unitWrap}>
                <View style={exerciseSetStyles.unit}>
                    <Text style={exerciseSetStyles.unitText}>Unit of Weight</Text>
                    <Switches color='white' colorTextOff='white' colorTextOn='white' textSize={24} borderColor='#353A47' buttonColor='white' shape={'line'} textFont={'normal'} value={!switchValue} onChange={() => { setUnit(!switchValue) }} animationDuration={125} textOff={'LB'} textOn={'KG'} />
                </View>
            </View>
            <View>
                <SetForm addSet={addWorkoutSet} />
            </View>
            <View style={exerciseSetStyles.scrollWrap}>
                <ScrollView>
                    {exerciseSet[currentExercise] && exerciseSet[currentExercise].length > 0 ? exerciseSet[currentExercise].map((exerciseSet, index) => <Sets key={index + 1} order={index + 1} exerciseSet={exerciseSet} />) : null}
                </ScrollView>
            </View>
            <View>
                <Button title='Complete' disabled={!exerciseSet[currentExercise].length} onPress={() => completeExercise()} buttonStyle={{ backgroundColor: '#18A558' }} />
            </View>
        </View>
    );
};
export default ExerciseSet;
