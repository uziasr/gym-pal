import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { splitStyles } from '../../styles/index';
import { Ionicons } from '@expo/vector-icons';
import splitConversion from './splitHelper';
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { startWorkout } from "../../state/actions/workoutActions"


const Splits = ({ body, navigation }) => {

    const [splits, setSplits] = useState({})
    const [isSelected, setSelected] = useState(false)
    const state = useSelector(state => state, shallowEqual)
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

    // **************************************************** THIS HERE
    // navigation.navigate('Login')// remove this after redux
    // ****************************************************

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
            <ScrollView>
                <View style={splitStyles.bodyWrap}>
                    {body.map((split, index) => {
                        return (
                            <View style={splits[split] ? { ...splitStyles.bodyView, backgroundColor: '#607196' } : { ...splitStyles.bodyView, backgroundColor: '#E8E9ED' }} key={index}>
                                <TouchableOpacity onPress={() => updateSplit(split)}>
                                    <View style={splitStyles.muscleWrap}>
                                        <Text
                                            style={splitStyles.bodyText}
                                        >{split.toUpperCase()}</Text>
                                        <Ionicons name="md-add" size={24} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>)
                    })}
                </View>
                <View style={splitStyles.buttonView}>
                    {isSelected ? <TouchableOpacity
                        style={isSelected ? { ...splitStyles.submitButton, backgroundColor: 'green' } : { ...splitStyles.submitButton }}
                        disabled={!isSelected}
                        onPress={() => { pressNavigation() }}
                    >
                        <Text>Start Workout</Text>
                    </TouchableOpacity> : null}
                </View>
            </ScrollView>
        </View>
    );
};

export default Splits;