import { createStackNavigator }  from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ExerciseOptions from '../components/workout/ExerciseOptions';

const screens = {
    Body:{
        screen: ExerciseOptions
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)