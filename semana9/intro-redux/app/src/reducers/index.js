import { combineReducers } from "redux";
import tasksReducer from "./tasks";

const rootReducer = combineReducers({
    tasksReducer: tasksReducer
});

export default rootReducer;