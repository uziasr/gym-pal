import React, { useState } from 'react';
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { register } from "../../state/actions/index"
import  useForm  from "./useForm"
import validate from './postValidator'


const Register = ({ navigation }) => {

    const storeData = async (value) => {
        console.log(newUser)
        try {
            await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
            // saving error
            console.log(e)
        }
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(handleRegister, validate, "register");

    const dispatch = useDispatch()

    const state = useSelector(state => state.reducer, shallowEqual)
    
    const handleRegister = () => {
        dispatch(register(newUser))
        if (state.token){
            navigation.navigate("Workout")
        }
    
    }

    const inputChangeHandler = (name, text) => {
        setNewUser({ ...newUser, [name]: text })
    }

    console.log(errors)

    return (
        <View>
            <Input
                label="Name"
                onChangeText={(text) => handleChange("name", text)}
                value={values.name}
                leftIcon={{ type: 'font-awesome', name: 'user-o', color: "black", paddingRight: 5 }}
                autoCapitalize="words"
            />
            <Input
                label="Email"
                onChangeText={(text) => handleChange("email", text)}
                value={values.email}
                leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: "black", paddingRight: 5 }}
                autoCapitalize="none"
            />
            <Input
                label="Password"
                onChangeText={(text) => handleChange("password", text)}
                value={values.password}
                leftIcon={{ type: 'font-awesome', name: 'key', color: "black", paddingRight: 5 }}
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button buttonStyle={{borderRadius: 20}} title="Sign Up" onPress={() => handleSubmit()} />
        </View>
    );
};

export default Register;