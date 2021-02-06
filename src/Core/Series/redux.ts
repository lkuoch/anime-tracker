import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {}

// Slice details
const name = "SERIES";

const initialState: IAppState = {};

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {
    initSeries: (slice) => slice,
  },
});

const selectors = {};

export { initialState, actions, reducer, selectors, name };
