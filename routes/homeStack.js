import { createStackNavigator }  from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ExerciseOptions from '../components/workout/ExerciseOptions';
import Exercise from '../components/exercise/Exercise'

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