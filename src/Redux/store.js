import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import weatherReducer from "./weather/DataReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const isDevMode = process.env.NODE_ENV === `development`;
const middlewares = [thunk];
if (isDevMode) {
  middlewares.push(logger);
}
const customApplier = isDevMode
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

const store = createStore(weatherReducer, customApplier);

export default store;
