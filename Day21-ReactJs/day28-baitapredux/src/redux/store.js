import { combineReducers, createStore } from "redux";
import counterReducer from "./features/couter";

const reduces = combineReducers({
    couter: counterReducer,
})

const store = createStore(reduces);

export default store;