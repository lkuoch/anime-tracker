import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { seriesApi } from "./api";

import type { State, Series } from "./types";
import type { RootState } from "@App/store";

// Slice details
const name = "anilist-series";

const adapter = createEntityAdapter<Series>({
  selectId: (series: Series) => series.id,

  // Sort on show title
  sortComparer: (a, b) => a.title.native.localeCompare(b.title.native),
});

const entitySelector = adapter.getSelectors<RootState>((state) => state[name]);

const initialState = adapter.getInitialState<State>({
  state: {
    currentPage: 0,
  },
});

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(seriesApi.endpoints.getSeries.matchFulfilled, (state, { payload: { Page } }) => {
      adapter.addMany(state, Page.media);
    });
  },
});

const selectors = {
  ...entitySelector,
  selectCurrentPage: (root: RootState) => root[name].state.currentPage,
};

export { initialState, actions, reducer, selectors, name };
