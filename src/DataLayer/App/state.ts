import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";

// Slice details
const name = "app";

const initialState: InitialState = {};

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {},
});

const selectors = {};

export { initialState, actions, reducer, selectors, name };
