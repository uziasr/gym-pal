import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { gymButton } from '../../common-components/commons'
import axios from 'axios'
import ArrowIcon from './Arrow'


const Splits = ({ body, navigation }) => {
    const [splits, setSplits] = useState({})
    const [isSelected, setSelected] = useState(false)
    const [splitList, setSplitList] = useState([])

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

    const styles = StyleSheet.create({
        root:{
            backgroundColor:'#2d2d2d',
            height: '100%'
        },
        bodyWrap: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'center'
        },
        bodyText: {
            alignSelf: 'flex-start',
            fontWeight: 'bold',
            color: 'black'
        },
        bodyView: {
            margin: 5,
            width: "98%",
            borderRadius: 15
        },
        buttonView: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly'
        },
        skipButton: {
            backgroundColor: 'dodgerblue',
            padding: 10,
            borderRadius: 10,
            color: 'white'
        },
        submitButton: {
            padding: 10,
            borderRadius: 10
        }

    })
    navigation.navigate('Exercise')
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

    const pressNavigation = () =>{
        const exercises = Object.keys(splits).filter(split=>splits[split])

        axios.post("http://192.168.1.3:5000/workout/1", {muscles: exercises})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log("there was an error",err)
        })
    }

    return (
        <View style={styles.root}>
            <ScrollView>
                <View style={styles.bodyWrap}>
                    {body.map((split, index) => {
                        return (
                            <View style={splits[split] ? { ...styles.bodyView, backgroundColor: '#607196' } : { ...styles.bodyView, backgroundColor: '#E8E9ED' }} key={index}>
                                <TouchableOpacity onPress={() => updateSplit(split)}>
                                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', alignContent: 'center', padding: 15, margin: 5,}}>
                                        <Text
                                            style={styles.bodyText}
                                            >{split.toUpperCase()}</Text>
                                        <ArrowIcon />
                                    </View>
                                </TouchableOpacity>
                            </View>)
                    })}
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        style={styles.skipButton}
                    ><Text>Skip</Text>
                    </TouchableOpacity>
    
                    {isSelected? <TouchableOpacity 
                    style={isSelected ? {...styles.submitButton, backgroundColor:'green'} : {...styles.submitButton}}
                    disabled={!isSelected}
                    onPress={()=>{pressNavigation()}}
                    >
                        <Text>Start Workout</Text>
                    </TouchableOpacity> : null }
                </View>
            </ScrollView>
        </View>
    );
};

export default Splits;