import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const Splits = ({ body }) => {
    const [splits, setSplits] = useState(()=>{
        newSplit= {}
        Object.keys(body).forEach(split=>{
            newSplit[split] = false
        })
        return newSplit
    })

    const updateSplit = (split) =>{
        setSplits({...splits, [split]:!splits[split]})
    }

    return (
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
            {body.map(split=>{
            return (
            <View>
                 <Text
                 style={splits[split]? {color: 'green'}: {color:'blue'}} 
                 onPress={()=>updateSplit(split)}>{split}</Text>
            </View>)
            })}
        </View>
    );
};

export default Splits;