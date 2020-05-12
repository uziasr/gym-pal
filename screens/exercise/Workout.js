import React, { useState, useEffect } from 'react';
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
        weight: 0,
        repetition: 0
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
            setTheSet({
                weight: 0,
                repetition: 0
            })

            return {
                ...workout,
                [exercise]: [...workout[exercise], [set.weight, set.repetition]]
            }
        })
        console.log('this is',exercise)
        console.log('this is workout', workout)
    }

    console.log("this is the exercise", exercise, 'this is the workout', workout, set)

    return (
        <>
            <View style={{ display: 'flex', flexDirection:'row', justifyContent: 'center' }}>
                <Text>{exercise}</Text>
            </View>
            <View style={styles.setView}>
                <TextInput
                    editable
                    placeholder='weight'
                    value={set.weight}
                    numericValue
                    onChangeText={text => changeHandler('weight', text)}
                />
                <Text>X</Text>
                <TextInput
                    editable
                    placeholder='reps'
                    value={set.repetition}
                    numericValue
                    onChangeText={text => changeHandler('repetition', text)}
                />
            </View>
            {workout[exercise]!==undefined ?
                workout[exercise].reverse().map(set => {
                    return (<View style={styles.setView}>
                        <Text>{set[0]}</Text>
                        <Text>X</Text>
                        <Text>{set[1]}</Text>
                    </View>)
                })
                : null}
            <Button title='+' disabled={(!set.repetition || !set.weight)} onPress={() => pressHandler()} />
        </>
    );
};

export default Workout;