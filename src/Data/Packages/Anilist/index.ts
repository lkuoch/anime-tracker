import * as series from "src/Data/Packages/Anilist/Series/state";
import { seriesApi } from "src/Data/Packages/Anilist/Series/api";

// Export reducer state
export const reducers = {
  [series.name]: series.reducer,
};

// Export api state
export const apis = {
  [seriesApi.reducerPath]: seriesApi.reducer,
};

export const apiMiddlewares = [seriesApi.middleware];
