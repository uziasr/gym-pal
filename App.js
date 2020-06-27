import React from 'react';
import Navigator from './routes/homeStack'
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import reducer from './state/reducers/index'
import workoutReducer from './state/reducers/workoutReducer'
import statsReducer from './state/reducers/statsReducer'
import exerciseReducer from './state/reducers/exerciseReducer'
import thunk from 'redux-thunk'
import { getToken } from './utils/index'


export default function App() {

  const rootReducer = combineReducers({
    reducer,
    workoutReducer,
    statsReducer,
    exerciseReducer
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
