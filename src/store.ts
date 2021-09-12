import { configureStore } from "@reduxjs/toolkit";
import { apiMap, apiMiddleware, reducerMap } from "@Data";

export const store = configureStore({
  devTools: !_CONFIG_.isProd,
  reducer: {
    ...reducerMap,
    ...apiMap,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});
