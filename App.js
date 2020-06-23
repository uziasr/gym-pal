import React from 'react';
import Navigator from './routes/homeStack'
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducer from './state/reducers/index'
import thunk from 'redux-thunk'
import { getToken } from './utils/index'


export default function App() {
  const store = createStore(reducer, applyMiddleware(thunk))

  getToken()
    .then(res => console.log("this is res", res))
    .catch(err => console.log("this is err", err))

  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
}
