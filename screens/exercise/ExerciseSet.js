import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import Switches from 'react-native-switches'
import Set from './Set'

const ExerciseSet = (props) => {
    // console.log(props.navigation.state.params.exercise)
    const currentExercise = props.navigation.state.params.exercise
    const [switchValue, setUnit] = useState(true)
    const capitalize = (words) => {
        return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    }

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>{capitalize(currentExercise)}</Text>
            </View>
           <View style={{flexDirection:'row', justifyContent:'center'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', width: '95%', marginHorizontal:'auto'}}>
                    <Text>Unit of Weight</Text>
                    <Switches shape={'line'} textFont={'normal'} value={!switchValue} onChange={()=>{setUnit(!switchValue)}} animationDuration={150} textOff={'lb'} textOn={'kg'}/>
                </View>
           </View>
            <View>
                <Set />
            </View>
        </View>
    );
};

export default ExerciseSet;
