import { StyleSheet } from 'react-native'
import { colors, font, fontBold } from './constants'

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
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        fontFamily: font
    },
    bodyView: {
        margin: 5,
        width: "45%",
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: "center",
        padding: 5,
        margin: 5,
    },
    titleText: {
        color: "white",
        alignSelf: "center",
        fontSize: 25,
        fontFamily: font
    }
})

export const dashBoardStyles = StyleSheet.create({
    title: {
        fontSize: 26,
        color: 'white',
        textAlign: 'center',
        fontFamily: font
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
        marginTop: 15,
        marginBottom: 3,
        color: 'white',
        justifyContent: 'center',
        fontFamily: font
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
        color: 'white',
        fontFamily: font
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
        flex: 1,
        // backgroundColor: '#2d2d2d',
    },
    statsView: {
        width: "99.5%",
        alignSelf: "center",
        height: 200,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 10,
        backgroundColor: '#2d2d2db5'
    },
    statsText: {
        // fontWeight: 'bold'
        fontSize: 30,
        fontFamily: fontBold,
        color: "white"
    },
    statsTextNum: {
        fontSize: 36,
        fontFamily: fontBold,
        marginBottom: 30,
        color: "white"
    },
    statsTextNumber: {
        fontFamily: fontBold,
        fontSize: 45,
        marginBottom: 30,
        color: "white"
    },
    titleWrap: {
        marginVertical: 15
    },
    title: {
        fontSize: 26,
        color: 'white',
        alignSelf: 'center',
        fontFamily: fontBold
    }
})

export const contributionViewStyles = StyleSheet.create({
    rootWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 10,
    },
    text: {
        color: 'black',
        fontSize: 14,
        fontFamily: font
    },
    titleText: {
        color: 'black',
        fontSize: 20,
        fontFamily: font
    },
    durationText: {
        color: "black",
        fontSize: 16,
        fontFamily: font
    },
    headerText: {
        color: 'white',
        fontSize: 26,
        fontFamily: font
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
        flexWrap: 'wrap',
        width: "92%"
    },
    touchableWorkoutWrapper: {
        marginBottom: 10
    },
    workoutCard: {
        width: "100%",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 5,
        margin: 0,
        backgroundColor: "white",
        borderWidth: 0
    },
    iconStyle: {
        paddingRight: 25,
        alignSelf: "center",
    },
    workoutView: {
        width: "75%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        alignItems: "center"
    },
    durationStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export const workoutStatsStyles = StyleSheet.create({
    root: {
        backgroundColor: backgroundColor,
        height: '100%',
    },
    exerciseWrap: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    buttonStyleExercise: {
        marginVertical: 25,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: "#425C6A",
        borderRadius: 30,
        alignSelf: "flex-end"
    },
    buttonSaveStyle: {
        width: "40%",
        paddingHorizontal: 10,
        paddingVertical: 7,
        alignSelf: "center",
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: "dodgerblue",
        justifyContent: "center",
        marginVertical: 25
    },
    buttonTextSaveStyle: {
        fontSize: 16,
        alignSelf: "center",
        color: "white",
        fontFamily: font
    },
    buttonTextStyleExercise: {
        color: "white",
        fontSize: 16,
        fontFamily: font,
    },
    text: {
        color: "white",
        fontFamily: font,
    },
    titleWrap: {
        paddingBottom: 15,
        marginTop: 20,
        // alignSelf: "center"
        justifyContent: "center",
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        alignItems: "center"

    },
    titleText: {
        fontSize: 24,
        color: "white",
        fontFamily: fontBold
        // fontWeight: "bold"
    },
    workoutTitle: {
        fontFamily: fontBold,
        fontSize: 24,
        color: "white",
        alignSelf: "center",
        marginVertical: 10
    }

})

export const setStyles = StyleSheet.create({
    rootWrap: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: "center",
        alignContent: "center"
    },
    textWrap: {
        width: '90%',
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#353A47'
    },
    textStyles: {
        fontSize: 19,
        color: 'white',
        fontFamily: font
    },
    editWrap: {
        // backgroundColor: "whitesmoke",
        width: "100%",
        padding: 0,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    deleteText: {
        alignSelf: "center",
        color: "white",
        fontSize: 20,
        fontFamily: font
    },
    deleteConfirmation: {
        fontFamily: font,
        color: "white",
        fontSize: 18
    },
    unitText: {
        fontSize: 20,
        color: "#1E90FF",
        paddingVertical: 5,
        right: 6,
        paddingHorizontal: 12,
        borderRadius: 60,
        fontFamily: fontBold
    },
    editText: {
        alignSelf: "center",
        fontFamily: font
    },
    inputStyles: {
        width: "30%",
        paddingTop: 15,
    },
    overlayStyles: {
        width: "100%"
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
        height: "100%",
        backgroundColor: backgroundColor,
        color: "white"
    },
    titleWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: fontBold,
        color: "white",
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
        color: "white",
        fontFamily: font
    },
    scrollWrap: {
        height: "52.25%"
    },
    trashWrap: {
        padding: 10,
        paddingBottom: 0
    },
    trashStyle: {
        alignSelf: "flex-end"
    },
    overlayTitle: {
        fontSize: 18,
        fontFamily: fontBold
        // fontWeight: "bold"
    },
    overlayButtonWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    overlayButton: {
        margin: 8,
        marginHorizontal: 30,
        backgroundColor: "dodgerblue",
        padding: 10,
        borderRadius: 12
    },
    overlayButtonText: {
        fontSize: 16,
        color: "white",
        fontFamily: font
    }
})

export const autoInputStyles = StyleSheet.create({
    input: {
        flex: 1,
        marginHorizontal: 'auto',
    },
    inputWrap: {
        paddingTop: 10,
        width: "85%",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between"

    },
    muscleFilterTextActive: {
        color: "green",
        fontSize: 18,
        fontFamily: fontBold
    },
    muscleFilterText: {
        color: "black",
        fontSize: 18,
        fontFamily: font
    },
    completeWorkoutButton: {
        padding: 5,
        right: 5,
        bottom: 12,
        alignSelf: "flex-end",
        // width: "30%"
    },
    progressMenu: {
        left: 10,
        alignSelf: "flex-end",
    },
    scrollWrap: {
        flexGrow: 1,
        width: '100%',
        height: '82%'
    },
    // muscleText: {
    //     fontSize: 18,
    //     fontFamily: font
    // },
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
        // fontWeight: "bold",
        fontFamily: fontBold
    },
    muscleText: {
        fontFamily: font
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
        height: 5,
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
        fontFamily: font,
        textAlign: "center"
    },
    overlayTitle: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
    },
    overlayButton: {
        backgroundColor: "dodgerblue",
        padding: 10,
        borderRadius: 12
    }
})

export const workoutStyles = StyleSheet.create({
    root: {
        backgroundColor: backgroundColor,
        height: "100%"
    },
    titleText: {
        fontSize: 24,
        fontFamily: fontBold,
        alignSelf: "center",
        marginVertical: 10,
        color: "white"
    },
    exerciseWrapper: {
        marginBottom: 10,
        marginTop: 10,
        paddingBottom: 10,
        marginHorizontal: 10,
        flexDirection: "column",
        paddingLeft: 10,
        justifyContent: "flex-start",
        borderBottomWidth: 1.5,
        borderBottomColor: "whitesmoke"
    },
    loader: {
        backgroundColor: backgroundColor,
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exerciseText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        fontFamily: font
    },
    setTextWrapper: {
        borderWidth: 0,
        paddingVertical: 5,
        paddingHorizontal: 12,
        // width: "40%",
        flexDirection: 'row',
        flexWrap: "wrap",
        borderRadius: 5,
        margin: 1,
        justifyContent: "center",
    },
    setText: {
        color: "white",
        fontSize: 18,
        fontFamily: font,
        alignSelf: "flex-end"
    },
    exerciseTextWrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        alignItems: "center",
        alignContent: "center",
    },
    workoutExerciseWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        // backgroundColor: "whitesmoke",
        borderRadius: 8
    },
    setWrapper: {
        // borderLeftWidth: .25,
        // borderLeftColor: "white",
        paddingLeft: 5,
        justifyContent: "flex-start",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    buttonWrap: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        paddingVertical: 10
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
        fontFamily: fontBold,
        // fontWeight: "bold",
        paddingBottom: 10,
        // color: "white"
    },
    loginRegisterLink: {
        alignSelf: "center",
        paddingTop: 20,
        fontSize: 16,
        fontFamily: font,
        color: "dodgerblue"
    }
})

export const registerStyles = ({
    errorsStyle: {
        alignSelf: "flex-end",
        top: 20,
        right: 10,
        color: "red"
    },
    buttonStyle: {
        borderRadius: 20
    }
})

export const homeStyles = StyleSheet.create({
    root: {
        backgroundColor: backgroundColor,
        height: "100%"
    }
})

export const scheduleStyles = StyleSheet.create({
    root: {
        backgroundColor: backgroundColor,
        height: "100%"
    },
    rootTitle: {
        alignSelf: "center",
        fontSize: 20,
        marginVertical: 10,
        color: "white",
    },
    toolDescriptionWrap: {
        width: "90%",
        padding:15,
        backgroundColor: "black",
        borderRadius:10,
        alignSelf: "center",
    },
    toolDescriptionText: {
        color:"white",
        fontSize: 16,
        alignSelf:"center"
    },
    savedTitle: {
        alignSelf: "center", 
        fontSize: 28, 
        marginVertical: 10,
        color: "white"
    },
    savedWorkoutsWrap: {
        width: "95%",
        backgroundColor:"dodgerblue",
        borderRadius:10,
        marginVertical:5,
        padding:15,
    },
    savedWorkoutsText: {
        fontSize: 16,
        color:"white"
    }

})