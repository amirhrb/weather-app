import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import weatherReducer from "./weather/DataReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
