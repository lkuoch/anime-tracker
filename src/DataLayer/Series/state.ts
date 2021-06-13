import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { seriesApi } from "./api";
import { RootState } from "@App/store";
import { InnerState, Series } from "./types";

// Slice details
const name = "series";

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
  selectCurrentPage: (state: RootState) => state.series.inner.currentPage,
  selectAdapted: (state: RootState) => ({
    ids: selector.selectIds(state),
    entities: selector.selectEntities(state),
  }),
};

export { initialState, actions, reducer, selectors, name };
