import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import { Input, ListItem } from 'react-native-elements';

const Set = () => {
    return (
        <View style={{flexDirection:'row'}}>
            <View style={{width:'30%'}}><Input placeholder='weight'/></View>
            <View style={{width:'30%'}}><Input style={{width:'40%'}} placeholder='repetitions'/></View>
        </View>
    );
};

export default Set;