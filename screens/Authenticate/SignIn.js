import React, { useState } from 'react';
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import axios from 'axios'

const SignIn = ({ navigation }) => {

    const [newUser, setNewUser] = useState({
        name:'',
        email:''
    })
    const pressHandler = () => {
        axios.post(`http://192.168.1.3:5000/user/signin`, newUser)
        .then(res=>{
            console.log(res.data)
            navigation.navigate("Workout")
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
                autoCapitalize="none"
            />
            <Input
                label="Password"
                onChangeText={(text) => inputChangeHandler("password", text)}
                value={newUser.password}
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button title="Login" onPress={()=>pressHandler()}/>
        </View>
    );
};

export default SignIn;