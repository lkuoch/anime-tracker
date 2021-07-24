import * as app from "@DataLayer/App/state";
import * as anilist from "@Packages/Anilist";


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
