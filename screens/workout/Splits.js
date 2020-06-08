import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { splitStyles } from '../../styles/index';
import { Ionicons } from '@expo/vector-icons';
import splitConversion from './splitHelper';


const Splits = ({ body, navigation }) => {
    
    const [splits, setSplits] = useState({})
    const [isSelected, setSelected] = useState(false)

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

    navigation.navigate('Exercise')// remove this after redux
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
        axios.post(`http://192.168.1.3:5000/user/${1}/workout`, { muscles: specificMuscles })
            .then(res => {
                console.log(res.data)
                navigation.navigate("Exercise")
            })
            .catch(err => {
                console.log("there was an error", err)
            })
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
                    <TouchableOpacity
                        style={splitStyles.skipButton}
                    ><Text>Skip</Text>
                    </TouchableOpacity>

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