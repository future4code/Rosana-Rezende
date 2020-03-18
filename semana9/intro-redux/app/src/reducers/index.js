import { combineReducers } from "redux";

import tasksReducer from "./tasks";

const rootReducer = combineReducers({
    tasksReducer,
});

export default rootReducer;