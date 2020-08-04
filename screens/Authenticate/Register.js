import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { register } from "../../state/actions/index"
import useForm from "./useForm"
import validate from './postValidator'
import { registerStyles } from "../../styles/index"


const Register = ({ navigation }) => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.reducer, shallowEqual)

    const inputChangeHandler = (name, text) => {
        setNewUser({ ...newUser, [name]: text })
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(handleRegister, validate, "register");

    function handleRegister() {
        dispatch(register(values))
        if (state.token) {
            navigation.navigate("Home")
        }
    }

    return (
        <View>
            {errors.name ? <Text style={registerStyles.errorStyle}>{errors.name}</Text> : null}
            <Input
                label="Name"
                onChangeText={(text) => handleChange("name", text)}
                value={values.name}
                leftIcon={{ type: 'font-awesome', name: 'user-o', color: "black", paddingRight: 5 }}
                autoCapitalize="words"
            />
            {errors.email ? <Text style={registerStyles.errorStyle}>{errors.email}</Text> : null}
            <Input
                label="Email"
                onChangeText={(text) => handleChange("email", text)}
                value={values.email}
                leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: "black", paddingRight: 5 }}
                autoCapitalize="none"
                autoCompleteType="email"
            />
            {errors.password ? <Text style={registerStyles.errorStyle}>{errors.password}</Text> : null}
            <Input
                label="Password"
                onChangeText={(text) => handleChange("password", text)}
                value={values.password}
                leftIcon={{ type: 'font-awesome', name: 'key', color: "black", paddingRight: 5 }}
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button buttonStyle={registerStyles.buttonStyle} title="Sign Up" onPress={() => handleSubmit()} />
        </View>
    );
};

export default Register;