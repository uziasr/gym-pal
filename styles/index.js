import { StyleSheet } from 'react-native'
import { colors } from './constants'

const backgroundColor = "#212121"
export const splitStyles = StyleSheet.create({
    root: {
        backgroundColor: backgroundColor,
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
        backgroundColor: backgroundColor,
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
        backgroundColor: backgroundColor,
        flexDirection: 'column',
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
        justifyContent: 'flex-start',
        width: "100%"
    },
    withoutMuscle: {
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    withMuscles: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    touchableWorkoutWrapper: {
        marginBottom: 15
    },
    workoutCard: {
        borderRadius: 2,
        width: "90%",
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    iconStyle: {
        paddingRight: 25,
    },
    workoutView: {
        width: "70%"
    },
    durationStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export const workoutStatsStyles = StyleSheet.create({
    root: {
        backgroundColor: backgroundColor,
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
    lockStyle: {
        paddingRight: 25,
        paddingBottom: 15,
    },
    buttonWrap: {
        width: '25%',
        paddingBottom: 15,
        paddingLeft: 30
    }
})

export const exerciseSetStyles = StyleSheet.create({
    rootWrap: {
        backgroundColor: backgroundColor,
        color: "white"
    },
    titleWrap: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    },
    unitWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 25
    },
    unit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%'
    },
    unitText: {
        fontSize: 16,
        color: "white"
    },
    scrollWrap: {
        height: 446
    }
})

export const autoInputStyles = StyleSheet.create({
    input: {
        flex: 1,
        marginHorizontal: 'auto'
    },
    inputWrap: {
        paddingTop: 10,
        width: "75%",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between"

    },
    completeWorkoutButton: {
        padding: 5,
        paddingLeft: 10,
        width: "30%"
    },
    CompleteText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green"
    },
    scrollWrap: {
        flexGrow: 1,
        width: '100%',
        height: '82%'
    },
    muscleText: {
        fontSize: 18
    },
    touchableStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 30,
        borderColor: '#E6E6E6',
        borderWidth: 1,
        borderStyle: "solid",
        paddingHorizontal: 15,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    touchableMuscleWrapper: {
        alignContent: 'center',
        alignItems: 'center',
    },
    exerciseTextWrap: {

    },
    touchableMuscle: {
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    overlayStyle: {
        width: '90%',
        height: 115,
    },
    completeWorkoutWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        width: "90%",
        marginTop: 15
    },
    workoutTextWrap: {

    },
    workoutText: {
        fontSize: 18,
        color: "white",
    },
    overlayTitle: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
    }
})

export const workoutStyles = StyleSheet.create({
    root: {
        backgroundColor: colors.rootBackground,
        height: "100%"
    },
    exerciseWrapper: {
        marginVertical: 8,
        marginHorizontal: 10,
        flexDirection: "row",
        paddingLeft: 10,
        justifyContent: "flex-start"

    },
    loader: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exerciseText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10
    },
    setTextWrapper: {
        borderWidth: 0,
        paddingVertical: 5,
        paddingHorizontal: 12,
        width: 150,
        flexDirection: 'row',
        flexWrap: "wrap",
        borderRadius: 5,
        margin: 1,
        justifyContent: "center",
    },
    setText: {
        color: "white"
    },
    exerciseTextWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "40%",
        alignItems: "center",
        alignContent: "center"
    },
    setWrapper: {
        borderLeftWidth: 1,
        borderLeftColor: "white",
        paddingLeft: 15,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    }
})

export const authStyles = StyleSheet.create({
    loginRegisterWrap: {
        width: "95%",
        // backgroundColor: "white",
        // opacity: .97,
        padding: 20,
        borderRadius: 10
    },
    loginRegisterText: {
        alignSelf: "center",
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 10,
        // color: "white"
    },
    loginRegisterLink : {
        alignSelf: "center",
        paddingTop: 20,
        fontSize: 16,
        color: "dodgerblue" 
    }
})