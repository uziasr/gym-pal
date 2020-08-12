import React, { useState } from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { setFormStyles } from '../../styles/index'
import { NavigationEvents } from 'react-navigation';

const SetForm = ({ addSet }) => {

    const [currentSet, setCurrentSet] = useState({ weight: 0, reps: 0 })
    const [lockInput, setLockInput] = useState(true)

    const inputChangeHandler = (name, text) => {
        setCurrentSet({ ...currentSet, [name]: text })
    }

    const isInvalidInput = !Number(currentSet.weight) == true || !Number(currentSet.reps) == true

    return (
        <View style={setFormStyles.rootWrap}>
            <NavigationEvents
                onWillFocus={payload =>
                    setCurrentSet(() => ({ weight: 0, reps: 0 }))
                }
            />
            <View style={setFormStyles.formWrap}>
                <TouchableOpacity onPress={() => setLockInput(!lockInput)}>
                    <FontAwesome5 style={setFormStyles.lockStyle} name={!lockInput ? "unlock" : "lock"} size={24} color="white" />
                </TouchableOpacity>
                <View style={setFormStyles.inputWrap}>
                    <Input
                        label='Weight'
                        keyboardType='number-pad'
                        numericValue
                        onChangeText={text => inputChangeHandler('weight', text)}
                        inputStyle={{ textAlign: 'center', color: "white", fontFamily: "open-sans-regular" }}
                        value={currentSet.weight == 0 ? '' : (currentSet.weight).toString()}
                        placeholder='0' />
                </View>
                <View style={setFormStyles.inputWrap}>
                    <Input
                        label='Repetitions'
                        keyboardType='number-pad'
                        numericValue
                        onChangeText={text => inputChangeHandler('reps', text)}
                        inputStyle={{ textAlign: 'center', color: "white", fontFamily: "open-sans-regular" }}
                        value={currentSet.reps == 0 ? '' : (currentSet.reps).toString()}
                        style={{ width: '40%' }}
                        placeholder='0' />
                </View>
                <View style={setFormStyles.buttonWrap}>
                    <TouchableOpacity onPress={() => {
                        addSet(currentSet)
                        if (!lockInput) {
                            setCurrentSet(() => {
                                return {
                                    weight: 0,
                                    reps: 0
                                }
                            })
                        }
                        Keyboard.dismiss()
                    }}
                        disabled={isInvalidInput ? true : false}
                    >
                        <AntDesign name="pluscircle" size={35} color={isInvalidInput ? 'grey' : "#18A558"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SetForm;