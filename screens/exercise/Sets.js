import React from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';


const Sets = ({ exerciseSet, order}) => {
    return (
        <View style={{justifyContent: 'center', flexDirection:'row'}}>
            <View style={{width:'90%', borderRadius:10, marginBottom:10, paddingHorizontal:20, paddingVertical:20, justifyContent: 'space-between', flexDirection:'row', backgroundColor:'#353A47'}}>
                <Text style={{fontSize:16, color:'white'}}>{order}</Text>
                <Text style={{fontSize:20, color:'white'}}>{exerciseSet[0]} X {exerciseSet[1]}</Text>
                <Text style={{fontSize:20, color:'white'}}>LBS</Text>
            </View>
        </View>
    );
};

export default Sets;