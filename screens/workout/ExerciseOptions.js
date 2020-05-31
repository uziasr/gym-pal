import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import bodyData from './body'
import Splits from './Splits'
import { TabView, SceneMap } from 'react-native-tab-view';

export default function ExerciseOptions({ navigation }) {

    const FirstRoute = () => {
        return <View style={[{ flex: 1 }, { backgroundColor: '#673ab7' }]}>
            <Splits body={bodyData['simple']} navigation={navigation} />
        </View>
    };

    const SecondRoute = () => {
        return <View style={[{ flex: 1 }, { backgroundColor: '#673ab7' }]}>
            <Splits body={bodyData['common']} navigation={navigation} />
        </View>
    };

    const ThirdRoute = () => {
        return <View style={[{ flex: 1 }, { backgroundColor: '#673ab7' }]}>
            <Splits body={bodyData['specific']} navigation={navigation} />
        </View>
    };

    const [options, setOptions] = useState({
        simple: true, common: false, specific: false
    })
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'simple', title: 'Simple' },
        { key: 'common', title: 'Common' },
        { key: 'specific', title:'Specific'}
    ]);
    const renderScene = SceneMap({
        simple: FirstRoute,
        common: SecondRoute,
        specific: ThirdRoute
    });

    const initialLayout = { width: Dimensions.get('window').width };


    const [body, setBody] = useState(bodyData['simple'])

    const switchHandler = (name) => {
        setOptions(() => {
            let newOptions = {}
            Object.keys(options).forEach((key) => {
                newOptions[key] = false
            })
            return { ...newOptions, [name]: true }
        })
        setBody(bodyData[name])
    }

    return (
        <>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                indicatorStyle={{ backgroundColor: 'blue', height: 2 }}
                style={{background: 'black'}}
            />
        </>

    );
};

