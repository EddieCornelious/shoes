import { applyMiddleware, createStore, combineReducers } from "redux";

import authReducer from "./reducers/auth";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ authenticated: authReducer }),
  applyMiddleware(
    thunk,
    +window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
