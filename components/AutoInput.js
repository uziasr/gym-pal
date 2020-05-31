import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Input} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { autoInputStyles } from '../styles/index'

const AutoInput = ({ data, listLimit, pressHandler }) => {
    const [query, setQuery] = useState('')
    const filteredData =  data.filter(exercise => {
        return (RegExp(new RegExp(query.toLowerCase())).test(exercise.toLowerCase()))
    }) 
    return (
        <View>
            <Input
                style={autoInputStyles.input}
                value={query}
                onChangeText={(text) => setQuery(text)}
                placeholder='enter exercise'
                leftIcon={<AntDesign name="search1" size={20} color="black" />}
            />
            <View style={autoInputStyles.scrollWrap}>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    {true ? filteredData.map((exercise, index) => {
                        return(
                        <TouchableOpacity style={autoInputStyles.touchableStyle}
                        key={index}
                        onPress={()=>pressHandler(exercise)}
                        >
                            <Text key={index} style={autoInputStyles.textStyle}>{exercise}</Text>
                            {/* <AntDesign name="right" size={18} color="black" /> */}
                        </TouchableOpacity>)
                    }) : null}
                </ScrollView>
            </View>
        </View>
    );
};

export default AutoInput;

