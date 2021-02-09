import { all, put, takeLatest } from "typed-redux-saga/macro";
import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchSeriesAction, fetchSeriesResult } from "./queries";
import { actions, Series } from "./redux";
import type { SeriesQuery } from "@Schema/anilist";

export function* initSeriesSaga() {
  yield* put(fetchSeriesAction({ page: 1 }));
}

export function* fetchSeriesHandler(action: PayloadAction<SeriesQuery>) {
  if (action.type === fetchSeriesResult.SUCCESS) {
    const media = (action.payload?.Page?.media as Series[]) ?? [];
    yield* put(actions.addSeriesMultiple(media));
  } else {
    console.log("###", action);
  }
}

export default function* () {
  yield* all([
    takeLatest(actions.initSeries, initSeriesSaga),
    takeLatest(
      [fetchSeriesResult.SUCCESS, fetchSeriesResult.FAILURE],
      fetchSeriesHandler
    ),
  ]);
}
