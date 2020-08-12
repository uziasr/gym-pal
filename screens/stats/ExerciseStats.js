import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { exerciseStatsStyles } from '../../styles/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getExerciseStats } from '../../state/actions/statsActions'
import Spinner from "../../utils/Spinner"
import {
    BarChart,
} from "react-native-chart-kit";




const ExerciseStats = ({ navigation }) => {
    const exercise = navigation.state.params
    const [loaded, setLoaded] = useState(false)

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getExerciseStats(state.reducer.token, exercise.id))
        setLoaded(() => true)
    }, [])

    const Bar = () => {
        return (
            <BarChart
                data={{
                    labels: [...state.statsReducer.exerciseData.weight.map(weight => `${weight} lbs`)],
                    datasets: [{
                        data: [...state.statsReducer.exerciseData.reps]
                    }]
                }}
                chartConfig={{
                    decimalPlaces: 2,
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#212121",
                    backgroundGradientToOpacity: .25,
                    color: (opacity = 1) => `rgba(	30, 144, 255, ${.9})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255)`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                style={{
                    marginBottom: 0
                }}
                width={410}
                height={350}
                showBarTops={true}
                showValuesOnTopOfBars={true}
                fromZero={true}
            />
        )
    }

    const ValidResponse = () => (
        <View style={exerciseStatsStyles.root}>
            <ScrollView style={{ flex: 1, alignContent: "center", }}>
                <View style={exerciseStatsStyles.titleWrap}>
                    <Text style={exerciseStatsStyles.title}>{exercise.name}</Text>
                </View>
                <Bar />
                <View style={{ flexDirection: "column", flexWrap: "wrap", alignContent: "center" }}>
                    <View style={exerciseStatsStyles.statsView}>
                        <Text style={exerciseStatsStyles.statsText}>Projected One Rep Max</Text>
                        <Text style={exerciseStatsStyles.statsTextNumber}> {Math.round(state.statsReducer.exerciseData.projected_one_rep.max_weight)}</Text>
                    </View>
                    <View style={exerciseStatsStyles.statsView}>
                        <Text style={exerciseStatsStyles.statsText}>Based on</Text>
                        <Text style={exerciseStatsStyles.statsTextNumber}>{state.statsReducer.exerciseData.projected_one_rep.weight}  X {state.statsReducer.exerciseData.projected_one_rep.reps} </Text>
                    </View>
                    <View style={exerciseStatsStyles.statsView}>
                        <Text style={exerciseStatsStyles.statsText}>Max Reps</Text>
                        <Text style={exerciseStatsStyles.statsTextNum}>{state.statsReducer.exerciseData.max_reps.repetition} Reps @ {state.statsReducer.exerciseData.max_reps.weight} {state.statsReducer.exerciseData.max_reps.unit == "pounds" ? "LBS" : "KG"}</Text>
                    </View>
                    <View style={exerciseStatsStyles.statsView}>
                        <Text style={exerciseStatsStyles.statsText}>Max Weight</Text>
                        <Text style={exerciseStatsStyles.statsTextNum}>{state.statsReducer.exerciseData.max_weight.weight} {state.statsReducer.exerciseData.max_weight.unit == "pounds" ? "LBS" : "KG"} @ {state.statsReducer.exerciseData.max_weight.repetition} Reps</Text>
                    </View>

                    <View style={exerciseStatsStyles.statsView}>
                        <Text style={exerciseStatsStyles.statsText}>Total Sets</Text>
                        <Text style={exerciseStatsStyles.statsTextNumber}>{state.statsReducer.exerciseData.total_sets}</Text>
                    </View>
                    <View style={exerciseStatsStyles.statsView}>
                        <Text style={exerciseStatsStyles.statsText}>Average Reps</Text>
                        <Text style={exerciseStatsStyles.statsTextNumber}>{Math.round(state.statsReducer.exerciseData.average_reps)}</Text>
                    </View>

                    <View style={exerciseStatsStyles.statsView}>
                        <Text style={exerciseStatsStyles.statsText}>Average Weight </Text>
                        <Text style={exerciseStatsStyles.statsTextNumber}>{Math.round(state.statsReducer.exerciseData.average_weight)} {state.statsReducer.exerciseData.unit}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

    const InvalidResponse = () => (
        <View>
            <Text>There is no data for this exercise</Text>
        </View>
    )

    return (
        <>
            {
                state.statsReducer.loading || loaded == false ?
                    <Spinner /> : state.statsReducer.error !== null || Object.keys(state.statsReducer.exerciseData).length <= 0 ?
                        <InvalidResponse /> : <ValidResponse />
            }
        </>
    )
};

export default ExerciseStats;