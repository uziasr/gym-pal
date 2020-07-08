import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { register } from "../../state/actions/index"
import useForm from "./useForm"
import validate from './postValidator'


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
            navigation.navigate("Workout")
        }
    }

    return (
        <View>
            {errors.name ? <Text style={{ alignSelf: "flex-end", top: 20, right: 10, color: "red" }}>{errors.name}</Text> : null}
            <Input
                label="Name"
                onChangeText={(text) => handleChange("name", text)}
                value={values.name}
                leftIcon={{ type: 'font-awesome', name: 'user-o', color: "black", paddingRight: 5 }}
                autoCapitalize="words"
            />
            {errors.email ? <Text style={{ position: "relative", alignSelf: "flex-end", top: 20, right: 10, color: "red" }}>{errors.email}</Text> : null}
            <Input
                label="Email"
                onChangeText={(text) => handleChange("email", text)}
                value={values.email}
                leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: "black", paddingRight: 5 }}
                autoCapitalize="none"
                autoCompleteType="email"
            />
            {errors.password ? <Text style={{ alignSelf: "flex-end", marginTop: 0, paddingTop: 0, top: 20, right: 10, color: "red" }}>{errors.password}</Text> : null}
            <Input
                label="Password"
                onChangeText={(text) => handleChange("password", text)}
                value={values.password}
                leftIcon={{ type: 'font-awesome', name: 'key', color: "black", paddingRight: 5 }}
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button buttonStyle={{ borderRadius: 20 }} title="Sign Up" onPress={() => handleSubmit()} />
        </View>
    );
};

export default Register;