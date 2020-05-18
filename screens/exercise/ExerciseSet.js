import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import Switches from 'react-native-switches'
import SetForm from './SetForm'
import Sets from './Sets'

const ExerciseSet = ({ navigation }) => {

    const currentExercise = navigation.state.params.exercise
    const [switchValue, setUnit] = useState(true)
    const [exerciseSet, setExerciseSet] = useState({ [currentExercise]: [] })

    const capitalize = (words) => {
        return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    }

    const addSet = (set) => {
        setExerciseSet({ [currentExercise]: [...exerciseSet[currentExercise], [set.weight, set.reps, switchValue]] })
    }

    return (
        <View>
            <View style={{ marginTop: 10,display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>{capitalize(currentExercise)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 25 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <Text style={{fontSize:16}}>Unit of Weight</Text>
                    <Switches color='#353A47' colorTextOff='#353A47' colorTextOn='#353A47' textSize={24} borderColor='#353A47' buttonColor='#353A47' shape={'line'} textFont={'normal'} value={!switchValue} onChange={() => { setUnit(!switchValue) }} animationDuration={125} textOff={'lb'} textOn={'kg'} />
                </View>
            </View>
            <View>
                <SetForm addSet={addSet} />
            </View>
            <View style={{height:450}}>
                <ScrollView>
                    {exerciseSet[currentExercise].length > 0 ? exerciseSet[currentExercise].map((exerciseSet, index) => <Sets key={index + 1} order={index + 1} exerciseSet={exerciseSet} />) : null}
                </ScrollView>
            </View>
            <View>
                <Button title='Complete' onPress={()=>{ navigation.navigate('Workout', exerciseSet)}} buttonStyle={{backgroundColor:'#18A558'}}/>
            </View>
        </View>
    );
};
export default ExerciseSet;
