import { combineReducers } from 'redux'

import tasksReducer from './tasks'
import filterReducer from './filter'

const rootReducer = combineReducers({
    tasksReducer,
    filterReducer
});

export default rootReducer;