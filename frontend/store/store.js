
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => {
  let middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
  }
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );
}

export default configureStore;