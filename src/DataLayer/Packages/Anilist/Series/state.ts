import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { seriesApi } from "./api";

import type { InnerState, Series } from "./types";
import type { RootState } from "@App/store";

// Slice details
const name = "anilist-series";

const adapter = createEntityAdapter<Series>({
  selectId: (series: Series) => series.id,
  sortComparer: false,
});

const selector = adapter.getSelectors<RootState>((state) => state[name]);

const initialState = adapter.getInitialState<InnerState>({
  inner: {
    currentPage: 0,
  },
});

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(seriesApi.endpoints.getSeries.matchFulfilled, (state, { payload: { Page } }) => {
      Page?.media && adapter.addMany(state, Page.media as Series[]);
    });
  },
});

const selectors = {
  selectCurrentPage: (state: RootState) => state[name].inner.currentPage,
  selectAdapted: (state: RootState) => ({
    ids: selector.selectIds(state),
    entities: selector.selectEntities(state),
  }),
};

export { initialState, actions, reducer, selectors, name };
