import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const Splits = ({ body }) => {
    const [splits, setSplits] = useState(()=>{
        newSplit= {}    
        body.forEach(bodySplit=>{
            newSplit[bodySplit] = false
        })
        return newSplit
    })

    const updateSplit = (split) =>{
        setSplits({...splits, [split]:!splits[split]})
    }

    console.log(splits)

    return (
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
            {body.map((split, index)=>{
            return (
            <View key={index}>
                 <Text
                 style={splits[split]? {color: 'green'}: {color:'blue'}} 
                 onPress={()=>updateSplit(split)}>{split}</Text>
            </View>)
            })}
        </View>
    );
};

export default Splits;