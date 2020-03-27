import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import trips from './trips'
import user from './user'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips,
    user
  });
