import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { SeriesQuery } from "@Schema/anilist";
import type { DeepExtractTypeSkipArrays } from "ts-deep-extract-types";

export interface IAppState {}

interface IState {
  state: IAppState;
}

export type Series = DeepExtractTypeSkipArrays<SeriesQuery, ["Page", "media"]>;

// Slice details
const name = "SERIES";

const adapter = createEntityAdapter<Series>({
  selectId: (series: Series) => series.id,
  sortComparer: false,
});

const selector = adapter.getSelectors<IRootState>((state) => state[name]);

const initialState = adapter.getInitialState<IState>({
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
  selectAdapted: (state: IRootState) => ({
    ids: selector.selectIds(state),
    entities: selector.selectEntities(state),
  }),
};

export { initialState, actions, reducer, selectors, name };
