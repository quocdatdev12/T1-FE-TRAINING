import { combineReducers } from "redux";
import counterSlice from "./features/counterSlice";
import { configureStore } from "@reduxjs/toolkit";


const reducers = combineReducers({
    counter: counterSlice,
})

const store = configureStore({
    reducer:reducers,
});

export default store;