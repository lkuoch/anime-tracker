import { combineReducers } from "redux";

import {
  name as appName,
  reducer as appReducer,
  initialState as appInitialState,
} from "@Core/App/redux";

import {
  name as seriesName,
  reducer as seriesReducer,
  initialState as seriesInitialState,
} from "@Core/Series/redux";

export const initialState = {
  [appName]: appInitialState,
  [seriesName]: seriesInitialState,
};

export const rootReducer = combineReducers({
  [appName]: appReducer,
  [seriesName]: seriesReducer,
});
