import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

const logger = createLogger({
  collapsed: true,
  duration: true,
});

const middlewares = [thunk, logger];

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);