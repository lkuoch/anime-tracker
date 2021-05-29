import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { InitialState, Series } from "./types";

// Slice details
const name = "SERIES";

const adapter = createEntityAdapter<Series>({
  selectId: (series: Series) => series.id,
  sortComparer: false,
});

const selector = adapter.getSelectors<RootState>((state) => state[name]);

const initialState = adapter.getInitialState<InitialState>({
  state: {},
});

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {
    initSeries: (slice) => slice,

    // CRUD
    addSeriesSingle: adapter.addOne,
    addSeriesMultiple: adapter.addMany,
  },
});

const selectors = {
  selectAdapted: (state: RootState) => ({
    ids: selector.selectIds(state),
    entities: selector.selectEntities(state),
  }),
};

export { initialState, actions, reducer, selectors, name };
