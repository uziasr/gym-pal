import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { autoInputStyles } from '../styles/index'
import splits from '../screens/workout/body'

const AutoInput = ({ data, listLimit, pressHandler }) => {
    const [query, setQuery] = useState('')
    const [exercises, setExercise] = useState([])
    const [muscles, setMuscles] = useState(["All", ...splits.specific])
    const [exerciseByMuscle, setExerciseByMuscle] = useState(
        Object.assign({ "All": [] }, ...splits.specific.map(key => ({ [key]: [] })))
    )
    const [muscleFilter, setMuscleFilter] = useState(
        Object.assign({ "All": true }, ...splits.specific.map(key => ({ [key]: false })))
    )
    useEffect(() => {
        const exerciseArr = []
        const exerciseByMuscle2 = exerciseByMuscle
        for(let i = 0; i<data.length; i++) {
            exerciseArr.push(data[i].exercise)
            exerciseByMuscle2[data[i].muscle] = [...exerciseByMuscle2[data[i].muscle], data[i].exercise] 
        }
        setExerciseByMuscle(()=>{
        return { ...exerciseByMuscle2 }
        })
        setExercise(()=>exerciseArr)

    }, [data])

    const filterByMuscle = () => {
        activeMuscles = Object.keys(muscles)
        if (muscleFilter['All']) {
            return exercises
        } else {
            let filteredArr = []
            muscles.forEach(muscle => {
                if (muscleFilter[muscle]) {
                    filteredArr = [...filteredArr, ...exerciseByMuscle[muscle]]
                }
            })
            return filteredArr
        }
    }


    const exerciseFilteredByMuscle = filterByMuscle()

    const filteredData = exerciseFilteredByMuscle.filter(exercise => {
        return (RegExp(new RegExp(query.toLowerCase())).test(exercise.toLowerCase()))
    })



    const muscleFilterPress = (text) => {
        if (text == "All") {
            Object.keys(muscleFilter).forEach(muscle => {
                setMuscleFilter({ [muscle]: false, All: true })
            })
        } else {
            setMuscleFilter(() => {
                return { ...muscleFilter, All: false, [text]: !muscleFilter[text] }
            })

        }
    }

    return (
        <View>
            <Input
                style={autoInputStyles.input}
                value={query}
                onChangeText={(text) => setQuery(text)}
                placeholder='enter exercise'
                leftIcon={<AntDesign name="search1" size={20} color="black" />}
            />
            <View style={autoInputStyles.touchableMuscleWrapper}>
                <ScrollView horizontal={true}>
                    {muscles.map((muscle, index) => (
                        <TouchableOpacity onPress={() => {
                            muscleFilterPress(muscle)

                        }} style={autoInputStyles.touchableMuscle} key={index}>
                            <Text style={muscleFilter[muscle] ? { color: "green" } : { color: "black" }}>{muscle}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={autoInputStyles.scrollWrap}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {true ? filteredData.map((exercise, index) => {
                        return (
                            <TouchableOpacity style={autoInputStyles.touchableStyle}
                                key={index}
                                onPress={() => pressHandler(exercise)}
                            >
                                <Text key={index} style={autoInputStyles.textStyle}>{exercise}</Text>
                                {/* <AntDesign name="right" size={18} color="black" /> */}
                            </TouchableOpacity>)
                    }) : null}
                </ScrollView>
            </View>
        </View>
    );
};

export default AutoInput;

