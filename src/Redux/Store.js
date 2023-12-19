import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import {thunk} from 'redux-thunk'
import reducer from "./Reducer";


  const root = combineReducers ({
    fetch:reducer,
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, composeEnhancers(applyMiddleware(thunk))
);
export { store};