import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import bodyData from './body'
import Splits from './Splits'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { NavigationEvents } from 'react-navigation';


export default function ExerciseOptions({ navigation }) {


    const state = useSelector(state => state.workoutReducer, shallowEqual)

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
        { key: 'specific', title: 'Specific' }
    ]);
    const renderScene = SceneMap({
        simple: FirstRoute,
        common: SecondRoute,
        specific: ThirdRoute
    });

    const initialLayout = { width: Dimensions.get('window').width };

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: 'dodgerblue' }}
        />
    )

    return (
        <>
            <NavigationEvents
                onWillFocus={payload => state.exerciseInProgress ? navigation.navigate("Sets", { exercise: state.currentExercise, sets: state.fullCurrentExercise }) : state.workoutInProgress ? navigation.navigate("Exercise") : null} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
                // indicatorStyle={{ backgroundColor: 'black', height: 2 }}
                // style={{ background: 'black' }}
            />
        </>

    );
};

