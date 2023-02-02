import { combineReducers } from "redux";

import { countReducer } from "./reducer";

export const rootReducer = combineReducers({
    counter: countReducer
})