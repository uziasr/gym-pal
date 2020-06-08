import { StyleSheet } from 'react-native'
import { colors } from './constants'

export const splitStyles = StyleSheet.create({
    root: {
        backgroundColor: colors.rootBackground,
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

export const dashBoardStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    },
    rootView: {
        backgroundColor: colors.rootBackground,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
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
    contributionTitleWrap: {
        marginVertical: 15,
        color: 'white',
        justifyContent: 'center'
    },
    statsDropDownStyle: {
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
    statsTitleStyle: {
        fontSize: 24,
        color: 'white'
    },
    statsDropDownWrap: {
        width: '100%'
    },
    selectableStatsWrap: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})

export const exerciseStatsStyles = StyleSheet.create({
    root: {
        backgroundColor: colors.rootBackground,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#2d2d2d'
    },
    statsView: {
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 5,
        backgroundColor: 'white'
    },
    statsText: {
        fontWeight: 'bold'
    },
    titleWrap: {
        marginVertical: 15
    },
    title: {
        fontSize: 24,
        color: 'white'
    }
})

export const contributionViewStyles = StyleSheet.create({
    rootWrap: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: 'black'
    },
    headerText: {
        color: 'white',
        fontSize: 24
    },
    workoutDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    withoutMuscle: {
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    withMuscles: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export const workoutStatsStyles = StyleSheet.create({
    root: {
        backgroundColor:colors.rootBackground,
        height: '100%'
    },
    exerciseWrap: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    text: { 
        color: "white"
    }

})

export const setStyles = StyleSheet.create({
    rootWrap: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textWrap: {
        width: '90%',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#353A47'
    },
    textStyles: {
        fontSize: 16,
        color: 'white'
    }
})

export const setFormStyles = StyleSheet.create({
    rootWrap: {
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: 'center',
        alignItems: 'center'
    },
    formWrap: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "space-between",
        width: '80%'
    },
    inputWrap: {
        width: '35%'
    },
    buttonWrap: {
        width: '25%',
        paddingBottom: 15,
        paddingLeft: 30
    }
})

export const exerciseSetStyles = StyleSheet.create({
    titleWrap: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20
    },
    unitWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 25
    },
    unit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    unitText: {
        fontSize: 16
    },
    scrollWrap: {
        height: 400
    }
})

export const autoInputStyles = StyleSheet.create({
    input: {
        paddingBottom: 0,
        flex: 1,
        marginHorizontal: 'auto'
    },
    scrollWrap: {
        flexGrow: 1,
        width: '100%',
        height: '94%'
    },
    touchableStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        backgroundColor: '#E6E6E6',
    },
    textStyle: {
        paddingHorizontal: 4
    },
    touchableMuscleWrapper: {
       alignContent: 'center',
       alignItems: 'center',
       paddingVertical: 10
    },
    touchableMuscle: {
        paddingHorizontal: 10,
    }
})

export const workoutStyles = StyleSheet.create({
    root:{
        backgroundColor: colors.rootBackground,
        height: "100%"
    },
    exerciseWrapper : {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    exerciseText: {
        color: 'white',
        fontSize: 20,
        borderColor: "white",
        borderBottomWidth: 1,
        marginBottom: 10
    },
    setWrapper: {
        borderWidth: 0,
        paddingVertical: 5,
        paddingHorizontal: 12,
        width: 100,
        flexDirection: 'row',
        flexWrap: "wrap",
        borderRadius: 5,
        margin:1,
        justifyContent: "center",
    },
    setText: {
        color: "white"
    }
})