import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, } from 'react-native';
import { Input, Overlay } from 'react-native-elements';
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
    const [visible, setVisible] = useState(false)

    const toggleOverlay = () => {
        setVisible(()=>!visible);
    };

    useEffect(() => {
        const exerciseArr = []
        const exerciseByMuscle2 = exerciseByMuscle
        for (let i = 0; i < data.length; i++) {
            exerciseArr.push(data[i])
            exerciseByMuscle2[data[i].muscle] = [...exerciseByMuscle2[data[i].muscle], data[i]]
        }
        setExerciseByMuscle(() => {
            return { ...exerciseByMuscle2 }
        })
        setExercise(() => exerciseArr)

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
        return (RegExp(new RegExp(query.toLowerCase())).test(exercise.exercise.toLowerCase()))
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

    const CompleteWorkoutOverlay = () => (
        <View>
            <Text style={autoInputStyles.overlayTitle}>Are you sure you want to finish your workout?</Text>
            <View style={autoInputStyles.completeWorkoutWrap}>
                <TouchableOpacity onPress={() => toggleOverlay()} style={{ backgroundColor: "dodgerblue", padding: 10, borderRadius: 12 }}>
                    <Text style={autoInputStyles.workoutText}>Continue Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "dodgerblue", padding: 10, borderRadius: 12 }}>
                    <Text style={autoInputStyles.workoutText}>Finish Workout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


    function ExerciseItemScroll() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {filteredData.map((exercise, index) => {
                    return (
                        <TouchableOpacity style={autoInputStyles.touchableStyle}
                            key={index}
                            onPress={() => pressHandler(exercise.exercise)}
                        >
                            <View>
                                <Text key={index} style={autoInputStyles.textStyle}>{exercise.exercise}</Text>
                                <Text>{exercise.muscle}</Text>
                            </View>
                            <AntDesign name="right" size={18} color="black" />
                        </TouchableOpacity>)
                })}
            </ScrollView>
        )
    }

    return (
        <View>
            <View elevation={2} style={{}}>
                <View style={autoInputStyles.inputWrap}>
                    <Input
                        style={autoInputStyles.input}
                        value={query}
                        onChangeText={(text) => setQuery(text)}
                        placeholder='enter exercise'
                        leftIcon={<AntDesign name="search1" size={20} color="black" />}
                    />
                    <TouchableOpacity style={autoInputStyles.completeWorkoutButton} onPress={() => {
                        toggleOverlay()
                    }}>
                        <Text style={autoInputStyles.CompleteText}>Complete</Text>
                    </TouchableOpacity>
                    <Overlay overlayStyle={autoInputStyles.overlayStyle} isVisible={visible} onBackdropPress={toggleOverlay}>
                        <CompleteWorkoutOverlay />
                    </Overlay>
                </View>
                <View style={autoInputStyles.touchableMuscleWrapper}>
                    <ScrollView horizontal={true}>
                        {muscles.map((muscle, index) => (
                            <TouchableOpacity onPress={() => {
                                muscleFilterPress(muscle)
                            }} style={autoInputStyles.touchableMuscle} key={index}>
                                <Text style={muscleFilter[muscle] ? { color: "green", fontSize: 18, fontWeight: "bold" } : { color: "black", fontSize: 18 }}>{muscle}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <View style={autoInputStyles.scrollWrap}>
                <ExerciseItemScroll exercise={filteredData} />
            </View>
        </View>
    );
};

export default AutoInput;
