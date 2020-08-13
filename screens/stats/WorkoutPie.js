import React, { useState, useEffect } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native'
import { workoutStatsStyles } from '../../styles/index'
import {
    PieChart,
} from "react-native-chart-kit";
import { Fontisto } from '@expo/vector-icons';

const WorkoutPie = ({ workout, onToggle }) => {
    const [byExercise, setByExercise] = useState([])
    const [byRep, setByRep] = useState([])
    const [isByExercise, setIsByExercise] = useState(true)
    const colors = ['#73A6AD', '#9B97B2', '#004346', '#F0544F', '#EDCB96', '#3E517A', '#2E5339', '#4C3549', '#0ACDFF', '#FF9FB2', '#A50104', '#E1CE7A', '#EBCFB2', '#809BCE']

    useEffect(() => {
        muscleGroupCount = {} // name: count
        workout.forEach(exercise => {
            muscleGroupCount[exercise.muscle] = muscleGroupCount[exercise.muscle] ? muscleGroupCount[exercise.muscle] + 1 : 1
        })
        setByExercise(() => {
            return Object.keys(muscleGroupCount).map((muscle, index) => {
                return {
                    name: muscle,
                    sets: muscleGroupCount[muscle],
                    color: colors[index],
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15

                }
            })
        })
    }, [])
    const weightView = () => {
        if (byRep.length > 0) {
            setIsByExercise(!isByExercise)
        } else {
            muscleObj = {}
            index = 0
            workout.forEach((exercise, index) => {
                if (exercise.muscle in muscleObj) {
                    muscleObj = { ...muscleObj, [exercise.muscle]: { ...muscleObj[exercise.muscle], reps: muscleObj[exercise.muscle].reps + exercise.sets.reduce((acc, curr) => (curr.repetition + acc), 0) } }
                } else {
                    muscleObj = {
                        ...muscleObj, [exercise.muscle]: {
                            name: exercise.muscle,
                            reps: exercise.sets.reduce((acc, curr) => (curr.repetition + acc), 0),
                            color: colors[index],
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 15
                        }
                    }
                    index += 1
                }
            })
            setByRep(() => {
                return Object.keys(muscleObj).map(muscle => (muscleObj[muscle]))
            })
            setIsByExercise(!isByExercise)
        }
    }


    return (
        <View>
            <View style={workoutStatsStyles.titleWrap}>
                <Text style={workoutStatsStyles.titleText}>{`Muscles Trained by ${isByExercise ? "Exercise" : "Reps"}`}</Text>
            </View>
            <PieChart
                data={!isByExercise && byRep.length ? byRep : byExercise}
                width={425}
                height={220}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                accessor={!isByExercise && byRep.length ? "reps" : "sets"}
                backgroundColor="transparent"
                paddingLeft={15}
                absolute
            />
            <View style={{ flexDirection: "row", alignSelf: "center", width: "90%", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => onToggle()} style={workoutStatsStyles.buttonStyleExercise}>
                    <Text style={{ color: "white", fontSize: 18 }}>Create Template</Text>
                    {/* <Fontisto name="save" size={16} color="whitesmoke" /> */}
                </TouchableOpacity>
                <TouchableOpacity style={workoutStatsStyles.buttonSaveStyle} onPress={() => isByExercise ? weightView() : setIsByExercise(!isByExercise)} >
                    <Text style={workoutStatsStyles.buttonTextSaveStyle}>{isByExercise ? "By Reps" : "By Exercise"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WorkoutPie;