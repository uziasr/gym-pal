import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import bodyData from './body'
import Splits from './Splits'

const ExerciseOptions = () => {
    // Allow the user to select the body parts that they are going to train
    // the simple options --> chest, back, legs, arms, shoulders
    // option type --> push/pull/legs
    // option type full-body
    const [options, setOptions] = useState({
        simple: true, common: false, specific: false 
    })
    const [body, setBody] = useState(bodyData['simple'])

    const pressHandler = (e, name) =>{
        setOptions(()=>{
            let newOptions = {}
            Object.keys(options).forEach((key)=>{
                newOptions[key]=false
            })
            return {...newOptions, [name]: true}
        })
        setBody(bodyData[name])
    }

    return (
        <View>
          <Text>What are we working on Today, select all that apply</Text>
         <View style={{display:'flex', flexDirection:'row'}}>
              <Button onPress={(e)=> pressHandler(e,'simple')} name='simple' title="simple"/>
              <Button onPress={(e)=> pressHandler(e,'common')} name='common' title="common"/>
              <Button onPress={(e)=> pressHandler(e,'specific')} name='specific' title="specific"/>
              <Button title="Skip"/>
         </View>
          <Splits body={body} />
          
        </View>
    );
};

export default ExerciseOptions;
