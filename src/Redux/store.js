import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import weatherReducer from "./weather/DataReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  console.log(process.env.NODE_ENV);
  middlewares.push(logger);
}
const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
