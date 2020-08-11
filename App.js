import React, { useEffect, useState } from 'react';
import Navigator from './routes/homeStack'
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import reducer from './state/reducers/index'
import workoutReducer from './state/reducers/workoutReducer'
import statsReducer from './state/reducers/statsReducer'
import exerciseReducer from './state/reducers/exerciseReducer'
import savedReducer from './state/reducers/savedReducer'
import thunk from 'redux-thunk'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'


const getFonts = () => (Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
})
)

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)


  const rootReducer = combineReducers({
    reducer,
    workoutReducer,
    statsReducer,
    exerciseReducer,
    savedReducer
  })

  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <>
      <Provider store={store}>
        {fontsLoaded ? <Navigator /> : <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />}
      </Provider>
    </>
  );
}
