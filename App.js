import React from 'react';
import Navigator from './routes/homeStack'
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducer from './state/reducers/index'
import thunk from 'redux-thunk'
import { getToken } from './state/actions/index'


export default function App() {
  const store = createStore(reducer, applyMiddleware(thunk))

  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
}
