import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { setStyles } from '../../styles/index'
import { FontAwesome5 } from '@expo/vector-icons';


const Sets = ({ exerciseSet, order }) => {

    const [editing, setEditing] = useState(false)

    const editPressHandler = () => {
        setEditing(!editing)
    }

    return (
        <View style={setStyles.rootWrap}>
            <View style={{...setStyles.textWrap, marginBottom: editing ? 0 : 10}}>
                <Text style={setStyles.textStyles}>{order}</Text>
                <Text style={setStyles.textStyles}>{exerciseSet.weight} X {exerciseSet.repetition}</Text>
                <Text style={setStyles.textStyles}>{exerciseSet.unit ? 'LBS' : 'KG'}</Text>
                <TouchableOpacity style={{ padding: 5 }} onPress={() => editPressHandler()}>
                    <FontAwesome5 name="edit" size={16} color="white" />
                </TouchableOpacity>
            </View>
            {editing? 
            <View style={setStyles.editWrap}>
                <Input style={setStyles.inputStyles}/>
                <Input style={setStyles.inputStyles}/>                
            </View>: null}
        </View>
    );
};

export default Sets;