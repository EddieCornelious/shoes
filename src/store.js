import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import authReducer from "/reducers/auth";

const logger = createLogger({
  // ...options
});

const store = createStore(
  combineReducers({ authenticated: authReducer }),
  applyMiddleware(logger)
);

export default store;
