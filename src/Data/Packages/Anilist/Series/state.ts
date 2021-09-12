import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { seriesApi } from "./api";

import type { State, Series } from "./types";
import type { RootState } from "@Types";

// Slice details
const name = "[SLICE]: anilist-series";

const adapter = createEntityAdapter<Series>({
  selectId: (series: Series) => series.id,

  // Sort on show title
  sortComparer: (a, b) => a.id - b.id,
});

const entitySelector = adapter.getSelectors<RootState>((state) => state[name]);

const initialState = adapter.getInitialState<State>({
  state: {
    currentPage: 1,
  },
});

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {
    incrementCurrentPage: (slice) => {
      slice.state.currentPage += 1;
    },
  },
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
