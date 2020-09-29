import React from 'react';
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';

const Profile = () => {
    
    const pressHandler = async (key) => {
        try {
            console.log("hdfas")
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("name");
            console.log("this should have run!!!")
            return true;
        }
        catch(exception) {
            console.log("this is exeception",   exception)
            return false;
        }
    }

    return (
        <View>
            <Button title="Logout" onPress={()=>pressHandler("@storage_Key")}/>
        </View>
    );
};

export default Profile;