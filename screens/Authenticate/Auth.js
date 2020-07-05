import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native"
import SignIn from './SignIn'
import Register from './Register'
import Profile from './Profile'
import { getToken } from '../../state/actions/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"

const Auth = ({ navigation }) => {

    const [login, setLogin] = useState(false)
    const state = useSelector(state => state, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getToken())
    }, [])

    const LoggedOut = () => {
        if (login) {
            return (
                <View style={{width: "85%",}}>
                    <SignIn navigation={navigation} />
                    <TouchableOpacity onPress={() => setLogin(!login)}>
                        <Text style={{ color: "dodgerblue" }}>Register Here</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={{
                    width:"80%"
                }}>
                    <Register navigation={navigation} />
                    <TouchableOpacity onPress={() => setLogin(!login)}>
                        <Text style={{ color: "dodgerblue" }}>Already a User, Sign In Here</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    const height = Dimensions.get("window").height
    const width = Dimensions.get("window").width

    return (
        <View style={{
            position: 'absolute',
            top: 0, left: 0,
            right: 0, bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                style={{
                    flex: 1,
                    resizeMode: "stretch",
                    position: "absolute",
                    height: height,
                    width: width,
                }}
                source={require("../../assets/rack.jpg")}
            />
            {state.token == null ? < LoggedOut /> : <Profile />}
        </View>
    );
};


export default Auth;