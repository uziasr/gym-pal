import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native'
import { workoutStatsStyles } from '../../styles/index'
import {
    PieChart,
} from "react-native-chart-kit";

const WorkoutPie = ({ workout }) => {
    const [byExercise, setByExercise] = useState([])
    const [byRep, setByRep] = useState([])
    const [byWeight, setByWeight] = useState([])
    const [isByExercise, setIsByExercise] = useState(true)
    const colors = ['red', 'blue', 'green', 'orange']

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
            workout.forEach((exercise, index)=>{
                if (exercise in muscleObj) {
                    muscleObj = {...muscleObj, [exercise]: {...muscleObj[exercise], reps: muscleObj[exercise].reps + exercise.sets.reduce((acc, curr) => (curr.repetition + acc), 0)}}
                } else {
                    muscleObj = {...muscleObj, [exercise] :{
                        name: exercise.muscle,
                        reps: exercise.sets.reduce((acc, curr) => (curr.repetition + acc), 0),
                        color: colors[index],
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 15
                    }}
                    index += 1
                }
            })
            setByRep(() => {
               return Object.keys(muscleObj).map(muscle=>(muscleObj[muscle]))
            })
            setIsByExercise(!isByExercise)
        }
    }


    return (
        <View>
            <Text style={workoutStatsStyles.text}>{`Muscle Trained by ${isByExercise ? "Exercise" : "Reps"}`}</Text>
            <PieChart
                data={!isByExercise && byRep.length ? byRep : byExercise}
                width={500}
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
            <Button title={isByExercise ? "By Reps" : "By Exercise"} onPress={() => isByExercise ? weightView() : setIsByExercise(!isByExercise)} />
        </View>
    );
};

export default WorkoutPie;