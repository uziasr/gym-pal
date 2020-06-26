import { StyleSheet } from 'react-native'

export const gymButton = (buttonColor='dodgerblue', buttonPadding=10, condition=undefined) => {
    buttonStyles = {
        padding: 30,
        margin: 5,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: buttonColor
    }
    if (condition){
        return condition[0] ? {...buttonStyles, ...condition[1]} : {...buttonStyles, ...condition[2]}
    }
    return buttonStyles
}