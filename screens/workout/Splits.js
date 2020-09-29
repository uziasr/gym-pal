import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { splitStyles } from '../../styles/index';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import splitConversion from './splitHelper';
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { startWorkout } from "../../state/actions/workoutActions"
// import { deadlift2 } from '../../assets/splits'

const Splits = ({ body, navigation }) => {

    const [splits, setSplits] = useState({})
    const [isSelected, setSelected] = useState(false)
    const state = useSelector(state => state, shallowEqual)
    const [imageMap, setImageMap] = useState({
        Chest: require(`../../assets/splits/push.jpg`),
        Hamstrings: require(`../../assets/splits/deadlift2.jpg`),
        Triceps: require(`../../assets/splits/triceps.jpg`),
        Push: require(`../../assets/splits/push.jpg`),
        Chest: require(`../../assets/splits/push.jpg`),
        Arms: require(`../../assets/splits/biceps.jpg`),
        Biceps: require(`../../assets/splits/biceps.jpg`),
        Forearms: require(`../../assets/splits/arms.jpg`),
        Quadriceps: require(`../../assets/splits/squat.jpg`),
        Calves: require(`../../assets/splits/calves.jpg`),
        Abs: require(`../../assets/splits/abs.jpg`),
        Shoulders: require(`../../assets/splits/shoulders.jpg`),
        Pull: require(`../../assets/splits/pull1.jpg`),
        Back: require(`../../assets/splits/pull1.jpg`),
        Legs: require(`../../assets/splits/squat.jpg`),
        "Full body": require(`../../assets/splits/fullBody1.jpg`),
        Trapezius: require(`../../assets/splits/traps.jpg`)
    })
    const dispatch = useDispatch()

    useEffect(() => {
        setSplits(() => {
            setSelected(false)
            newSplit = {}
            body.forEach(split => {
                newSplit[split] = false
            })
            return newSplit
        })
    }, [body])

    const updateSplit = (split) => {
        setSplits(() => {
            const newSplit = { ...splits, [split]: !splits[split] }
            setSelected(() => {
                let select = false
                Object.keys(newSplit).forEach(split => {
                    if (newSplit[split]) {
                        select = true
                    }
                })
                return select
            })
            return { ...splits, [split]: !splits[split] }
        })
    }

    const pressNavigation = () => {
        const musclesTraining = Object.keys(splits).filter(split => splits[split])
        const specificMuscles = splitConversion(musclesTraining)
        dispatch(startWorkout(state.reducer.token, { muscles: specificMuscles }))
        navigation.navigate("Exercise", { muscles: specificMuscles })
    }

    return (
        <View style={splitStyles.root}>
            {isSelected ? <TouchableOpacity onPress={() => { pressNavigation() }} style={{ flexDirection: "row", justifyContent: "center", marginHorizontal: 10, marginVertical: 20, backgroundColor: "dodgerblue", borderRadius: 10, padding: 10, }}>
                <Text style={splitStyles.titleText}>Start Workout</Text>
            </TouchableOpacity> :
                <View style={{ flexDirection: "row", justifyContent: "center", marginHorizontal: 10, marginVertical: 20 }}>
                    <Text style={splitStyles.titleText}>Select Your Split</Text>
                    {/* {isSelected ? <TouchableOpacity
                    disabled={!isSelected}
                    onPress={() => { pressNavigation() }}>
                    <FontAwesome name="arrow-circle-o-right" size={40} color="mediumseagreen" />
                </TouchableOpacity> : null} */}
                </View>}
            <ScrollView>
                <View style={splitStyles.bodyWrap}>
                    {body.map((split, index) => {
                        return (
                            <View style={splits[split] ? { ...splitStyles.bodyView, backgroundColor: '#344955', color: '#CBD9E1' } : { ...splitStyles.bodyView, backgroundColor: '#E8E9ED' }} key={index}>
                                <TouchableOpacity onPress={() => updateSplit(split)}>
                                    <View style={splitStyles.muscleWrap}>
                                        <Text style={{ ...splitStyles.bodyText, color: splits[split] ? '#E8F0F6' : 'black' }}>{split.toUpperCase()}</Text>
                                        <Image style={{ width: 180, height: 200, borderRadius: 15 }} source={imageMap[split]} />
                                        {splits[split] ?
                                            <FontAwesome name="check-circle" size={24} color="#CBD9E1" /> : <Ionicons name="md-add" size={24} color='black' />}
                                    </View>
                                </TouchableOpacity>
                            </View>)
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

export default Splits;