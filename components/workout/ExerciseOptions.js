import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import bodyData from './body'
import Splits from './Splits'

const ExerciseOptions = () => {
    // Allow the user to select the body parts that they are going to train
    // the simple options --> chest, back, legs, arms, shoulders
    // option type --> push/pull/legs
    // option type full-body
    const styles = StyleSheet.create({
        rootWrap: {
           width: '100%',
           marginHorizontal: 'auto',
           display:'flex',
           flexDirection: 'row',
           justifyContent: 'space-evenly',
           fontFamily: "'Open Sans', sans-serif"
        },
        button: {
            backgroundColor: 'transparent',
            color: 'black',
            paddingVertical:15,
            alignSelf: 'center'
        },
    });


    const [options, setOptions] = useState({
        simple: true, common: false, specific: false
    })
    const [body, setBody] = useState(bodyData['simple'])

    const pressHandler = (e, name) => {
        setOptions(() => {
            let newOptions = {}
            Object.keys(options).forEach((key) => {
                newOptions[key] = false
            })
            return { ...newOptions, [name]: true }
        })
        setBody(bodyData[name])
    }

    return (
        <View>
            <View style={styles.rootWrap}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={(e) => pressHandler(e, 'simple')}
                >
                    <Text>Simple</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={(e) => pressHandler(e, 'common')}
                >
                    <Text>Common</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={(e) => pressHandler(e, 'specific')}
                >
                    <Text>Specific</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}><Text>Skip</Text></TouchableOpacity>
            </View>
            <Splits body={body} />

        </View>
    );
};

export default ExerciseOptions;
