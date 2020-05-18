import React, { useState } from 'react';
import { View,TouchableOpacity, Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const SetForm = ({ addSet }) => {
    const [currentSet, setCurrentSet] = useState({ weight: 0, reps: 0 })

    const inputChangeHandler = (name, text) => {
        setCurrentSet({ ...currentSet, [name]: text })
    }

    const isInvalidInput = !Number(currentSet.weight) == true || !Number(currentSet.reps) == true

    return (
        <View style={{ flexDirection: 'row', justifyContent: "center", alignContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: "space-between", width: '80%' }}>
                <View style={{ width: '35%' }}>
                    <Input
                        label='Weight'
                        keyboardType='number-pad'
                        numericValue
                        onChangeText={text => inputChangeHandler('weight', text)}
                        inputStyle={{ textAlign: 'center' }}
                        value={currentSet.weight == 0? '': (currentSet.weight).toString()}
                        placeholder='0' />
                </View>
                <View style={{ width: '35%' }}>
                    <Input
                        label='Repetitions'
                        keyboardType='number-pad'
                        numericValue
                        onChangeText={text => inputChangeHandler('reps', text)}
                        inputStyle={{ textAlign: 'center' }}
                        value={currentSet.reps == 0? '': (currentSet.reps).toString() }
                        style={{ width: '40%' }}
                        placeholder='0' />
                </View>
                <View style={{ width: '25%', paddingBottom: 15, paddingLeft: 30 }}>
                    <TouchableOpacity onPress={() => {
                        addSet(currentSet)
                        setCurrentSet(()=>{
                            return {
                                weight:0,
                                reps:0
                            }
                        })
                        Keyboard.dismiss()
                    }}
                        disabled={ isInvalidInput ? true : false}
                        >
                        <AntDesign name="pluscircle" size={35} color={isInvalidInput? 'grey' : "#18A558"} />
                    </TouchableOpacity></View>
            </View>
        </View>
    );
};

export default SetForm;