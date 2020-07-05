import React, { useState } from 'react';
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { login } from '../../state/actions/index'

const SignIn = ({ navigation }) => {
    
    const [newUser, setNewUser] = useState({
        name: '',
        email: ''
    })
    const dispatch = useDispatch()

    const loginHandler = () => {
        dispatch(login(newUser))
        navigation.navigate("Workout")
    }

    const inputChangeHandler = (name, text) => {
        setNewUser({ ...newUser, [name]: text })
    }

    return (
        <View>
            <Input
                label="Email"
                onChangeText={(text) => inputChangeHandler("email", text)}
                value={newUser.email}
                autoCapitalize="none"
            />
            <Input
                label="Password"
                onChangeText={(text) => inputChangeHandler("password", text)}
                value={newUser.password}
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button title="Login" onPress={() => loginHandler()} />
        </View>
    );
};

export default SignIn;