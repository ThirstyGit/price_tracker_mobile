// Imports.
import { combineReducers } from "redux";

// First reducer for authentication.
const authReducer = (state = {}, action) => {
  switch (action.type) {
    // If loggin in add the token.
    case 'login':
      return {
        ...state,
        token: action.payload.token
      }
    // On logout remove the token.
    case 'logout':
      return {
        ...state,
        token: ''
      }
    // If nothing matches return normal state.
    default:
      return state;
  }
}

// Combining reducers together.
const reducers = combineReducers({
  auth: authReducer
})

export default reducers;
