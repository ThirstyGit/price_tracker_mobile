import React from 'react';
import { useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Importing user defined modules.
import reducers from "./app/store/reducers";
// importing screens.
import SigninScreen from './app/screens/SigninScreen';

// Creating the redux store.
const store = createStore(reducers, {}, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <SigninScreen />
    </Provider>
  );
}
