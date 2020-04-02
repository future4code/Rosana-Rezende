import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import trips from './trips'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips,
  });
