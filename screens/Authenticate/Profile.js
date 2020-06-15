import React from 'react';
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'

const Profile = () => {
    
    const pressHandler = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch(exception) {
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