import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import Switches from 'react-native-switches'
import SetForm from './SetForm'
import Sets from './Sets'
import { exerciseSetStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { addSet, completeSet } from '../../state/actions/workoutActions'
import { NavigationEvents } from 'react-navigation';

const ExerciseSet = ({ navigation }) => {

    const currentExercise = navigation.state.params.exercise
    const [switchValue, setUnit] = useState(true)
    const [mainExerciseSet, setExerciseSet] = useState(navigation.state.params.sets || { [currentExercise]: [] })

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

    const capitalize = (words) => {
        return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    }

    const addWorkoutSet = (set) => {
        const formattedSet = { weight: set.weight, repetition: set.reps, unit: switchValue ? 'pounds' : 'kilograms' }
        dispatch(addSet(state.reducer.token, state.workoutReducer.workoutExerciseId, formattedSet))
    }
    const exerciseSet = state.workoutReducer.fullCurrentExercise

    const completeExercise = () => {
        setExerciseSet({ [currentExercise]: [] })
        dispatch(completeSet(state.reducer.token, state.workoutReducer.workoutExerciseId))
        navigation.navigate('Workout')
    }

    return (
        <View style={exerciseSetStyles.rootWrap}>
            <NavigationEvents
                onWillFocus={payload => setExerciseSet(()=>{
                    if (navigation.state.params.sets) {
                        return navigation.state.params.sets
                    } else {
                        return { [currentExercise]: [] }
                    }
                })
            }
            />
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
                    {exerciseSet.length > 0 ? exerciseSet.map((exerciseSet, index) => <Sets key={exerciseSet.id} order={exerciseSet.set_order} exerciseSet={exerciseSet} />) : null}
                </ScrollView>
            </View>
            <View>
                <Button title='Complete' disabled={!(exerciseSet.length > 0)} onPress={() => completeExercise()} buttonStyle={{ backgroundColor: '#18A558' }} />
            </View>
        </View>
    );
};
export default ExerciseSet;
