import { StyleSheet } from 'react-native'

// export const buttons = StyleSheet.create({

// })

export const gymButton = (buttonColor='dodgerblue', buttonPadding=10, condition=undefined) => {
    // color of button, padding,
    //condition accepts an array [condition (bool), styles if true (obj), styles if false (obj)]
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