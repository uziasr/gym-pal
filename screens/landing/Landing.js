import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const landingStyles = StyleSheet.create({
    button:{
        color:'white',
        width:'80%'
        // padding: 
    }
})

const Landing = () => {
    const [text, setText] = useState(false)
    return (
        <View style={landingStyles.button}>
            <Button title="Start Workout" onPress={()=>setText(!text)}/>
            {text ? <Text>Welcome</Text> : null}
        </View>
    );
};

export default Landing;