import React from 'react';
import { View, Text, } from 'react-native';
import { setStyles } from '../../styles/index'

const Sets = ({ exerciseSet, order}) => {
    return (
        <View style={setStyles.rootWrap}>
            <View style={setStyles.textWrap}>
                <Text style={setStyles.textStyles}>{order}</Text>
                <Text style={setStyles.textStyles}>{exerciseSet[0]} X {exerciseSet[1]}</Text>
                <Text style={setStyles.textStyles}>{exerciseSet[2] ? 'LBS':'KG'}</Text>
            </View>
        </View>
    );
};

export default Sets;