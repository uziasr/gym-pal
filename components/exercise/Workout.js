import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';


const Workout = ({ exercise, setWorkout, workout }) => {

    const styles = StyleSheet.create({
        setView: {
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-evenly'
        },
        button: {
            backgroundColor: 'transparent',
            color: 'black',
            paddingVertical: 15,
            alignSelf: 'center'
        },
    });


    const [set, setTheSet] = useState({
        weight: null,
        repetition: null
    })

    const changeHandler = (name, text) => {
        setTheSet(() => {
            return {
                ...set,
                [name]: Number(text)
            }
        })
    }

    const pressHandler = () => {
        setWorkout(() => {
            return {
                ...workout,
                [exercise]: [...workout[exercise], [set.weight, set.repetition]]
            }
        })
    }

    console.log("this is the exercise", exercise, 'this is the workout', workout, set)

    return (
        <>
            <View style={{ display: 'flex', flexDirection:'row', justifyContent: 'center' }}>
                <Text>{exercise}</Text>
            </View>
            {/* {workout[exercise] ?
                workout[exercise].map(set => {
                    <View style={styles.setView}>
                        <Text>{set[0]}</Text>
                        <Text>X</Text>
                        <Text>{set[1]}</Text>
                    </View>
                })
                : null} */}
            <View style={styles.setView}>
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
                    onChangeText={text => changeHandler('repetition', text)}
                />
            </View>
            <Button title='+' disabled={(!set.repetition || !set.weight)} onPress={() => pressHandler()} />
        </>
    );
};

export default Workout;