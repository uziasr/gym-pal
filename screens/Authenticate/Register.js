import React, { useState } from 'react';
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { register } from "../../state/actions/index"


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

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const state = useSelector(state => state.reducer, shallowEqual)
    
    const pressHandler = () => {
        dispatch(register(newUser))
        if (state.token){
            navigation.navigate("Workout")
        }
    
    }

    const inputChangeHandler = (name, text) => {
        setNewUser({ ...newUser, [name]: text })
    }


    return (
        <View>
            <Input
                label="Name"
                onChangeText={(text) => inputChangeHandler("name", text)}
                value={newUser.name}
                leftIcon={{ type: 'font-awesome', name: 'user-o', color: "black", paddingRight: 5 }}
                autoCapitalize="words"
            />
            <Input
                label="Email"
                onChangeText={(text) => inputChangeHandler("email", text)}
                value={newUser.email}
                leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: "black", paddingRight: 5 }}
                autoCapitalize="none"
            />
            <Input
                label="Password"
                onChangeText={(text) => inputChangeHandler("password", text)}
                value={newUser.password}
                leftIcon={{ type: 'font-awesome', name: 'key', color: "black", paddingRight: 5 }}
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button buttonStyle={{borderRadius: 20}} title="Sign Up" onPress={() => pressHandler()} />
        </View>
    );
};

export default Register;