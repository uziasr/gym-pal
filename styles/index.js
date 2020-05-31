import { StyleSheet } from 'react-native'

export const splitStyles = StyleSheet.create({
    root: {
        backgroundColor: '#2d2d2d',
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
    muscleWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        padding: 15,
        margin: 5,
    }
})

export const DashBoardStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    },
    rootView: {
        backgroundColor: '#2d2d2d',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#2d2d2d'
    },
    exercisesView: {
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 5,
        backgroundColor: 'white'
    },
    contributionTitleWrap:{
        marginVertical: 15, 
        color: 'white', 
        justifyContent: 'center'
    },
    statsDropDownStyle:{
        paddingBottom: 5, 
        marginBottom: 5, 
        paddingHorizontal: 15, 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignContent: 'center', 
        alignItems: 'center', 
        borderBottomColor: 'white', 
        borderBottomWidth: 0.5 
    },
    statsTitleStyle:{
        fontSize: 24, 
        color: 'white'
    }
})