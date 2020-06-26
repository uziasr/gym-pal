import React, { useState } from 'react';
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';

const SignUp = ({ navigation }) => {

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
        name:'',
        email:'',
        password:''
    })

    const pressHandler = async () => {
        axios.post(`http://192.168.1.3:5000/user/signup`, newUser)
        .then(async res=>{
            try {
                await AsyncStorage.setItem('token', `Bearer ${res.data.token}`)
                navigation.navigate("Workout")
            } catch(e) {
                console.log(e)
            }
        })
        .catch(err=>console.log(err))
    }

    const inputChangeHandler = (name, text) => {
        setNewUser({ ...newUser, [name]: text })
    }

    return (
        <View>
            <Input 
                label="Name"
                onChangeText={(text)=> inputChangeHandler("name", text)}
                value={newUser.name}
                autoCapitalize="words"
            />
            <Input 
                label="Email"
                onChangeText={(text)=> inputChangeHandler("email", text)}
                value={newUser.email}
                autoCapitalize="none"
            />
            <Input 
                label="Password"
                onChangeText={(text)=> inputChangeHandler("password", text)}
                value={newUser.password}
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Button title="Sign Up" onPress={()=>pressHandler()}/>
        </View>
    );
};

export default SignUp;