import React from 'react';
import { View, Text, } from 'react-native';
import { setStyles } from '../../styles/index'

const Sets = ({ exerciseSet, order}) => {
    return (
        <View style={setStyles.rootWrap}>
            <View style={setStyles.textWrap}>
                <Text style={setStyles.textStyles}>{order}</Text>
                <Text style={setStyles.textStyles}>{exerciseSet.weight} X {exerciseSet.repetition}</Text>
                <Text style={setStyles.textStyles}>{exerciseSet.unit ? 'LBS':'KG'}</Text>
            </View>
        </View>
    );
};

export default Sets;