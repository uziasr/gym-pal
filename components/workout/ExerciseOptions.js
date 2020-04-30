import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ExerciseOptions = () => {
    // Allow the user to select the body parts that they are going to train
    // the simple options --> chest, back, legs, arms, shoulders
    // option type --> push/pull/legs
    // option type full-body
    const [options, setOptions] = useState({
        simple: true, common: false, specific: false 
    })

    const pressHandler = (e, name) =>{
        setOptions(()=>{
            let newOptions = {}
            Object.keys(options).forEach((key)=>{
                newOptions[key]=false
            })
            return {...newOptions, [name]: true}
        })
    }
    console.log(options)

    return (
        <View>
          <Text>What are we working on Today, select all that apply</Text>
          <Text>Advanced Options</Text>
          <Button onPress={(e)=> pressHandler(e,'simple')} name='simple' title="simple"/>
          <Button onPress={(e)=> pressHandler(e,'common')} name='common' title="common"/>
          <Button onPress={(e)=> pressHandler(e,'specific')} name='specific' title="specific"/>
          <Button title="Skip"/>
          
        </View>
    );
};

export default ExerciseOptions;
