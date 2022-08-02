import todoReducer from "./reducers/TodoReducer";
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    todo:todoReducer
})

export const store=createStore(reducer)