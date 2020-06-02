import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import {
    PieChart,
} from "react-native-chart-kit";

const WorkoutPie = ({ workout }) => {
    console.log(workout)
    const [byExercise, setByExercise] = useState([])
    const [bySet, setBySet] = useState([])
    const [byWeight, setByWeight] = useState([])
    const colors = ['red', 'blue', 'green', 'orange']

    useEffect(() => {
        muscleGroupCount = {} // name: count
        workout.forEach(exercise => {
            muscleGroupCount[exercise.muscle] = muscleGroupCount[exercise.muscle] ? muscleGroupCount[exercise.muscle] + 1 : 1
        })
        console.log("this is workout",muscleGroupCount)
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
    console.log(byExercise)
    const data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538000,
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];
    return (
        <PieChart
            data={byExercise}
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
            accessor="sets"
            backgroundColor="transparent"
            paddingLeft={15}
            absolute
        />
    );
};

export default WorkoutPie;