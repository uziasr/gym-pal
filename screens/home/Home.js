import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getToken } from '../../state/actions/index'


const Home = ({ navigation }) => {

    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getToken())
    }, [])

    return (
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Schedule")}>
                <Text>Go To Schedule</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Home;