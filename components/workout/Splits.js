import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const Splits = ({ body }) => {
    const [splits, setSplits] = useState({})
    const [isSelected, setSelected] = useState(false)

    useEffect(() => {
        setSplits(() => {
            newSplit = {}
            body.forEach(split => {
                newSplit[split] = false
            })
            return newSplit
        })
    }, [body])


    const updateSplit = async (split) => {
        await setSplits(() => {
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

        // setSelected((isSelected)=>{
        // let select = false
        // Object.keys(splits).forEach(split=>{
        //     console.log(split, splits[split])
        //     if(splits[split]){
        //         select = true
        //     }  
        // })
        // return select
        // })
        console.log('this is isSelected', isSelected)
    }

    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {body.map((split, index) => {
                return (
                    <View key={index}>
                        <Text
                            style={splits[split] ? { color: 'green' } : { color: 'blue' }}
                            onPress={() => updateSplit(split)}>{split}</Text>
                    </View>)
            })}
            <Button title='Start Workout' disabled={!isSelected} />
        </View>
    );
};

export default Splits;