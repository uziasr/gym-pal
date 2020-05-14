import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';

const ExerciseSet = (props) => {
    // console.log(props.navigation.state.params.exercise)
    const currentExercise = props.navigation.state.params.exercise
    return (
        <View>
            <Text>{currentExercise}</Text>
            <Text>You're here :)</Text>
        </View>
    );
};

export default ExerciseSet;

// Object.keys(workout).map((anExercise, index) => <Text key={index}>{anExercise}</Text>)
// {/* <View>
// {Object.keys(workout).map((anExercise, index) => <Text key={index}>{anExercise}</Text>)}
// {!isActive ?
//     <>

//         <AutoInput data={exerciseList} listLimit={10} pressHandler={addExercise}/>
//         {/* <Button onPress={() => addExercise()} title='Go!' /> */}
//     </>
//     :
//     <Workout exercise={exercise} setWorkout={setWorkout} workout={workout}/>
// }
// {workout[exercise] ?
//     workout[exercise].map(set => {
//         <View style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-evenly'
//         }}>
//             <Text>{set[0]}</Text>
//             <Text>X</Text>
//             <Text>{set[1]}</Text>
//         </View>
//     })
//     : null}
// </View> */}