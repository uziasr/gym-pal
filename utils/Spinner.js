import React from "react"
import { View, ActivityIndicator } from "react-native"
import { workoutStyles } from "../styles/index"

const Spinner = ({ style, color }) => (
    <View style={style ? { ...workoutStyles.loader, ...style } : workoutStyles.loader}>
        <ActivityIndicator size="large" color={color || "white"} />
    </View>
)

export default Spinner