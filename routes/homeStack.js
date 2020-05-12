import { createStackNavigator }  from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ExerciseOptions from '../screens/workout/ExerciseOptions';
import Exercise from '../screens/exercise/Exercise'

const screens = {
    Body:{
        screen: ExerciseOptions
    },
    Exercise:{
        screen: Exercise
    }
    
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)