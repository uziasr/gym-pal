import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from "react-native"
import SignIn from './SignIn'
import SignUp from './SingUp'
import Profile from './Profile'
import { loggedIn } from '../../utils/index'
import { useSelector, useDispatch, shallowEqual } from "react-redux"

const Auth = ({ navigation }) => {

    const [login, setLogin] = useState(false)

    const LoggedOut = () => {
        if (login) {
            return (
                <>
                    <SignIn navigation={navigation} />
                    <TouchableOpacity onPress={() => setLogin(!login)}>
                        <Text style={{ color: "dodgerblue" }}>Register Here</Text>
                    </TouchableOpacity>
                </>
            )
        } else {
            return (
                <>
                    <SignUp navigation={navigation} />
                    <TouchableOpacity onPress={() => setLogin(!login)}>
                        <Text style={{ color: "dodgerblue" }}>Already a User, Sign In Here</Text>
                    </TouchableOpacity>
                </>
            )
        }
    }

    return (
        <View>
            {loggedIn ? <Profile /> : < LoggedOut />}
        </View>
    );
};


export default Auth;