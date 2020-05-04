import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { gymButton } from '../../common-components/commons'


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
            // padding:70,
            padding: 15,
            margin: 5,
            alignSelf: 'flex-start',
            color: 'white',
            fontWeight: 'bold'
        },
        bodyView: {
            margin: 10,
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
        navigation.navigate('Exercise')

    }

    return (
        <View style={styles.root}>
            <View style={styles.bodyWrap}>
                {body.map((split, index) => {
                    return (
                        <View style={splits[split] ? { ...styles.bodyView, backgroundColor: 'green' } : { ...styles.bodyView, backgroundColor: 'blue' }} key={index}>
                            <TouchableOpacity onPress={() => updateSplit(split)}>
                                <Text
                                    style={styles.bodyText}
                                    >{split.toUpperCase()}</Text>
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
        </View>
    );
};

export default Splits;