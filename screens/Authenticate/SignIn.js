import React, { useState } from 'react';
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import axios from 'axios'

const SignIn = () => {

    const [newUser, setNewUser] = useState({
        name:'',
        email:''
    })
    const pressHandler = () => {
        axios.post(`http://192.168.1.3:5000/user/signin`, newUser)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
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
            />
            <Input
                label="Password"
                onChangeText={(text) => inputChangeHandler("password", text)}
                value={newUser.password}
                secureTextEntry={true}
            />
            <Button title="Login" onPress={()=>pressHandler()}/>
        </View>
    );
};

export default SignIn;