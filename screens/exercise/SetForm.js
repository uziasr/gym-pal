import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Input, ListItem, Button } from 'react-native-elements';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const SetForm = ({ addSet }) => {
    const [currentSet, setCurrentSet] = useState({ weight: 0, reps: 0 })

    const inputChangeHandler = (name, text) => {
        console.log(name, text)
        setCurrentSet({ ...currentSet, [name]: text })
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: "center", alignContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: "space-between", width: '80%' }}>
                <View style={{ width: '35%' }}>
                    <Input
                        label='Weight'
                        onChangeText={text => inputChangeHandler('weight', text)}
                        inputStyle={{ textAlign: 'center' }}
                        value={currentSet.weight}
                        placeholder='0' />
                </View>
                <View style={{ width: '35%' }}>
                    <Input
                        label='Repetitions'
                        onChangeText={text => inputChangeHandler('reps', text)}
                        inputStyle={{ textAlign: 'center' }}
                        value={currentSet.reps}
                        style={{ width: '40%' }}
                        placeholder='0' />
                </View>
                <View style={{ width: '25%', paddingBottom: 15, paddingLeft: 30 }}>
                    <TouchableOpacity onPress={() => {
                        console.log(currentSet)
                        addSet(currentSet)}}>
                        <AntDesign name="pluscircle" size={35} color="#18A558" />
                    </TouchableOpacity></View>
            </View>
        </View>
    );
};

export default SetForm;