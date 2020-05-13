import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button, ScrollView, Dimensions } from 'react-native';
import { Input, ListItem } from 'react-native-elements';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


const AutoInput = ({ data, listLimit }) => {

    const [query, setQuery] = useState('')
    const filteredData =  data.filter(exercise => {
        return (RegExp(new RegExp(query.toLowerCase())).test(exercise.toLowerCase()))
    }) //: data

    return (
        <View style={{
            // justifyContent: 'flex-start',
            // alignItems: 'center',
            // alignContent: 'center',
            // marginHorizontal: 'auto',
        }}>

            <Input
                style={{ paddingBottom: 0, flex: 1, marginHorizontal: 'auto' }}
                value={query}
                onChangeText={(text) => setQuery(text)}
                placeholder='enter exercise'
                leftIcon={<AntDesign name="search1" size={20} color="black" />}
            />
            <View style={{flexGrow : 1, width:'100%', height:'94%'}}>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    {true ? filteredData.map((exercise, index) => {
                        return(
                        <TouchableOpacity style={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            paddingVertical:30,
                            backgroundColor: '#E6E6E6',
                        }}
                        key={index}
                        >
                            <Text key={index} style={{paddingHorizontal:4}}>{exercise}</Text>
                            {/* <AntDesign name="right" size={18} color="black" /> */}
                        </TouchableOpacity>)
                    }) : null}
                </ScrollView>
            </View>
        </View>
    );
};

export default AutoInput;

