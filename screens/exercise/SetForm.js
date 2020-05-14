import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Input, ListItem, Button } from 'react-native-elements';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const SetForm = () => {
    const [currentSet, setCurrentSet] = useState({weight:0, reps:0})
    return (
        <View style={{flexDirection:'row', justifyContent:"center", alignContent:'center', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignContent:'center', alignItems:'center', justifyContent:"space-between", width:'95%'}}>
                <View style={{width:'35%'}}><Input inputStyle={{textAlign:'center'}} value={currentSet.weight} placeholder='weight'/></View>
                <View style={{width:'35%'}}><Input inputStyle={{textAlign:'center'}} value={currentSet.reps} style={{width:'40%'}} placeholder='repetitions'/></View>
                <View style={{width:'25%', paddingBottom:15, paddingLeft:30}}><TouchableOpacity><AntDesign name="pluscircle" size={24} color="#40826d" /></TouchableOpacity></View>
            </View>
        </View>
    );
};

export default SetForm;