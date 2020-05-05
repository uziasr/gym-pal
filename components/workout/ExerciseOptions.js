import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import bodyData from './body'
import Splits from './Splits'
import { TabView, SceneMap } from 'react-native-tab-view';

export default function ExerciseOptions({ navigation }) {
    // Allow the user to select the body parts that they are going to train
    // the simple options --> chest, back, legs, arms, shoulders
    // option type --> push/pull/legs
    // option type full-body
    const styles = StyleSheet.create({
        rootWrap: {
            width: '100%',
            marginHorizontal: 'auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            fontFamily: "'Open Sans', sans-serif",
            //    backgroundColor: '#bdd4e7',
            //    backgroundImage: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)'

        },
        button: {
            backgroundColor: 'transparent',
            color: 'black',
            paddingVertical: 15,
            alignSelf: 'center'
        },
    });

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
            />
        </>

    );
};

