import { StyleSheet } from 'react-native'

export const splitStyles = StyleSheet.create({
    root:{
        backgroundColor:'#2d2d2d',
        height: '100%'
    },
    bodyWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center'
    },
    bodyText: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        color: 'black'
    },
    bodyView: {
        margin: 5,
        width: "98%",
        borderRadius: 15
    },
    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    skipButton: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 10,
        color: 'white'
    },
    submitButton: {
        padding: 10,
        borderRadius: 10
    },
    muscleWrap:{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        alignContent: 'center', 
        padding: 15, 
        margin: 5,
    }
})