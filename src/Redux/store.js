import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import weatherReducer from "./weather/DataReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}
const costumeApplier = () => {
  if (process.env.NODE_ENV === `development`) {
    return composeWithDevTools(applyMiddleware(...middlewares));
  } else {
    return applyMiddleware(...middlewares);
  }
};
const store = createStore(weatherReducer, costumeApplier());

export default store;
