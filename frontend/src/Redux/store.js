
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { reducer as AuthReducer } from "./Task/reducer"
import { reducer as TaskReducer } from "./Auth/reducer"
import {thunk} from "redux-thunk"
const rootReducer=combineReducers({AuthReducer,TaskReducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))