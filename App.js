import React from 'react';
import Navigator from './routes/homeStack'
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import reducer from './state/reducers/index'
import workoutReducer from './state/reducers/workoutReducer'
import statsReducer from './state/reducers/statsReducer'
import exerciseReducer from './state/reducers/exerciseReducer'
import savedReducer from './state/reducers/savedReducer'
import thunk from 'redux-thunk'


export default function App() {

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
        <Navigator />
      </Provider>
    </>
  );
}
