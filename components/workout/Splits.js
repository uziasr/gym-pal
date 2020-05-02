import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


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
            padding: 30,
            margin: 5,
            alignSelf: 'center',
            color: 'white',
            fontWeight: 'bold'
        },
        bodyView: {
            margin: 10,
            width: "45%",
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
        <>
            <View style={styles.bodyWrap}>
                {body.map((split, index) => {
                    return (
                        <View style={splits[split] ? { ...styles.bodyView, backgroundColor: 'green' } : { ...styles.bodyView, backgroundColor: 'blue' }} key={index}>
                            <Text
                                style={styles.bodyText}
                                onPress={() => updateSplit(split)}>{split.toUpperCase()}</Text>
                        </View>)
                })}
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.skipButton}
                ><Text>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={isSelected ? {...styles.submitButton, backgroundColor:'green'} : {...styles.submitButton}}
                disabled={!isSelected}
                onPress={()=>{pressNavigation()}}
                >
                    <Text>Start Workout</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Splits;