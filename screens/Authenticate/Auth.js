import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native"
import SignIn from './SignIn'
import Register from './Register'
import Profile from './Profile'
import { getToken } from '../../state/actions/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { authStyles } from "../../styles/index"

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
                <View style={authStyles.loginRegisterWrap}>
                    <Text style={authStyles.loginRegisterText}>Login</Text>
                    <SignIn navigation={navigation} />
                    <TouchableOpacity onPress={() => setLogin(!login)}>
                        <Text style={authStyles.loginRegisterLink}>Register Here</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={authStyles.loginRegisterWrap}>
                    <Text style={authStyles.loginRegisterText}>Register</Text>                    
                    <Register navigation={navigation} />
                    <TouchableOpacity onPress={() => setLogin(!login)}>
                        <Text style={authStyles.loginRegisterLink}>Already a User, Sign In Here</Text>
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
            alignItems: 'center',
            // backgroundColor:"#1D222A"
        }}>
            {/* <Image
                style={{
                    flex: 1,
                    resizeMode: "stretch",
                    position: "absolute",
                    height: height,
                    width: width,
                }}
                source={require("../../assets/rack.jpg")}
            /> */}
            {console.log("hello",state.reducer.token)}
            {state.reducer.token == null ? < LoggedOut /> : <Profile />}
        </View>
    );
};


export default Auth;