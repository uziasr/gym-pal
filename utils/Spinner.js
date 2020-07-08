import React from "react"
import { View, ActivityIndicator } from "react-native"
import { workoutStyles } from "../styles/index"

const Spinner = () => (
    <View style={workoutStyles.loader}>
        <ActivityIndicator size="large" color="white" />
    </View>
)

export default Spinner