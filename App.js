import React from 'react';
import { useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';

// Importing user defined modules.
import reducers from "./app/store/reducers";
// importing screens.
import SigninScreen from './app/screens/SignupScreen';

const store = createStore(reducers, {});

export default function App() {
  return (
    <Provider store={store}>
      <SigninScreen />
    </Provider>
  );
  
}
