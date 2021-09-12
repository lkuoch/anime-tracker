import * as app from "src/Data/App/state";
import * as anilist from "src/Data/Packages/Anilist";


// Export reducer state
export const reducerMap = {
  [app.name]: app.reducer,
  ...anilist.reducers,
};

// Export api state
export const apiMap = {
  ...anilist.apis,
};

export const apiMiddleware = [...anilist.apiMiddlewares];
