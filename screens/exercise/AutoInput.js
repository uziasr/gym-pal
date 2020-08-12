import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Input } from 'react-native-elements';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { autoInputStyles } from '../../styles/index'
import splits from '../workout/body'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { completeWorkout } from "../../state/actions/workoutActions"
import CompleteWorkoutOverlay from './CompleteWorkoutOverlay'
import  Spinner from '../../utils/Spinner'

const AutoInput = ({ data, navigation, pressHandler, focusedMuscles, currentExercises }) => {
    const [query, setQuery] = useState('')
    const [exercises, setExercise] = useState([])
    const [muscles, setMuscles] = useState(["All", ...splits.specific])
    const [exerciseByMuscle, setExerciseByMuscle] = useState(
        Object.assign({ "All": [] }, ...splits.specific.map(key => ({
            [key]: []
        })))
    )
    const [muscleFilter, setMuscleFilter] = useState(() => {
        if (focusedMuscles) {
            return Object.assign({ "All": false }, ...splits.specific.map(key => {
                if (focusedMuscles.includes(key)) {
                    return { [key]: true }
                }
                return { [key]: false }
            }))
        } else {
            return Object.assign({ "All": true }, ...splits.specific.map(key => ({ [key]: false })))
        }
    })
    const [visible, setVisible] = useState(false)

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

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


    const toggleOverlay = () => {
        setVisible(() => !visible);
    };

    const completeWorkoutHandler = () => {
        toggleOverlay()
        dispatch(completeWorkout(state.reducer.token, state.workoutReducer.workoutId))
        navigation.navigate("Overall Stats")
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

    function ExerciseItemScroll() {
        return state.exerciseReducer.loading ? <Spinner style={{backgroundColor: null}} color={"#212121"}/> : (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {filteredData.map((exercise, index) => {
                    return (
                        <TouchableOpacity style={autoInputStyles.touchableStyle}
                            key={index}
                            onPress={() => pressHandler(exercise.exercise)}
                        >
                            <View>
                                <Text key={index} style={autoInputStyles.textStyle}>{exercise.exercise}</Text>
                                <Text style={autoInputStyles.muscleText}>{exercise.muscle}</Text>
                            </View>
                            <AntDesign name="right" size={18} color="black" />
                        </TouchableOpacity>)
                })}
            </ScrollView>
        )
    }

    return (
        <View>
            <View elevation={2}>
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
                        <Entypo name="menu" style={autoInputStyles.progressMenu} size={40} color="black" />
                    </TouchableOpacity>
                    <CompleteWorkoutOverlay currentExercises={currentExercises} navigation={navigation} completeWorkoutHandler={completeWorkoutHandler} visible={visible} toggleOverlay={toggleOverlay} />
                </View>
                <View style={autoInputStyles.touchableMuscleWrapper}>
                    <ScrollView horizontal={true}>
                        {muscles.map((muscle, index) => (
                            <TouchableOpacity onPress={() => {
                                muscleFilterPress(muscle)
                            }}
                                style={autoInputStyles.touchableMuscle}
                                key={index}>
                                <Text style={muscleFilter[muscle] ? autoInputStyles.muscleFilterTextActive : autoInputStyles.muscleFilterText }>{muscle}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <View style={autoInputStyles.scrollWrap}>
                <ExerciseItemScroll exercise={filteredData} />
            </View>
        </View>
    )
};

export default AutoInput;
