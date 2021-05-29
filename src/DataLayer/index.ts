import * as app from "@DataLayer/App/state";
import * as series from "@DataLayer/Series/state";
import { seriesApi } from "@DataLayer/Series/api";

// Export reducer state
export const reducerMap = {
  [app.name]: app.reducer,
  [series.name]: series.reducer,
};

// Export api state
export const apiMap = {
  [seriesApi.reducerPath]: seriesApi.reducer,
};

export const apiMiddleware = [seriesApi.middleware];
