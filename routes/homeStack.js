import { createStackNavigator }  from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ExerciseOptions from '../screens/workout/ExerciseOptions';
import Exercise from '../screens/exercise/Exercise'
import ExerciseSet from '../screens/exercise/ExerciseSet'

const screens = {
    Body:{
        screen: ExerciseOptions
    },
    Exercise:{
        screen: Exercise
    },
    ExerciseSet:{
        screen: ExerciseSet
    }
    
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)