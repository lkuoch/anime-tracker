import { name as appName, reducer as appReducer, initialState as appInitState } from "@Core/App/redux";

import { name as seriesName, reducer as seriesReducer, initialState as seriesInitState } from "@Core/Series/redux";

import appSagas from "@Core/App/sagas";
import seriesSagas from "@Core/Series/sagas";

// Export initial state
export const initialState = {
  [appName]: appInitState,
  [seriesName]: seriesInitState,
};

// Export reducer state
export const reducerMap = {
  [appName]: appReducer,
  [seriesName]: seriesReducer,
};

// Export all sagas
export const sagas = [appSagas, seriesSagas];
