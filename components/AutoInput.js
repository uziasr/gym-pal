import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import { specificSplit } from '../screens/workout/body'

const AutoInput = () => {
    const [query, setQuery] = useState('')
    return (
        <View>
            <TextInput/>
        </View>
    );
};

export default AutoInput;