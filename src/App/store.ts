import { configureStore } from "@reduxjs/toolkit";
import { apiMap, apiMiddleware, reducerMap } from "@DataLayer/index";

export const store = configureStore({
  devTools: !_CONFIG_.isProd,
  reducer: {
    ...reducerMap,
    ...apiMap,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
