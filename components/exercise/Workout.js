import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';


const Workout = ({ exercise, setWorkout, workout }) => {

    const [set, setTheSet] = useState({
        weight:null,
        repetition:null
    })

    const changeHandler = (name,text)=>{
        setTheSet(()=>{
            return {
                ...set,
                [name]:Number(text)
            }
        })
    }

    const pressHandler = ()=>{
        setWorkout(()=>{
            return {...workout,
                [exercise]: [...workout[exercise], [set.weight, set.repetition]]
            }
        })
    }

    console.log("this is the exercise", exercise, 'this is the workout',workout, set)

    return (
        <>
            <Text>{ exercise }</Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
               <TextInput
                    editable
                    placeholder='weight'
                    value={set.weight}
                    onChangeText={text => changeHandler('weight', text)}
                />
                <Text>X</Text>
                <TextInput
                    editable
                    placeholder='reps'
                    value={set.repetition}
                    onChangeText={text => changeHandler('repetition',text)}
                /> 
            </View>
            <Button title='+' disabled={(!set.repetition || !set.weight)} onPress={()=> pressHandler()}/>
        </>
    );
};

export default Workout;