import { combineReducers } from 'redux'

import tasksReducer from './tasks'
import filterReducer from './filter'
import searchReducer from './search'

const rootReducer = combineReducers({
    tasksReducer,
    filterReducer,
    searchReducer
});

export default rootReducer;