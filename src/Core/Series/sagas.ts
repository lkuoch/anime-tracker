import { all, put, takeLatest } from "typed-redux-saga/macro";
import { PayloadAction } from "@reduxjs/toolkit";

import mock from "./mock.json";
import { fetchSeriesAction, fetchSeriesResult } from "./queries";
import { actions } from "./redux";
import { SeriesQuery } from "@GraphQL/schema";
import { Series } from "./types";

export function* initSeriesSaga() {
  const media: Series[] = mock.data.Page.media;

  yield* put(actions.addSeriesMultiple(media));
}

export function* fetchSeriesHandler(action: PayloadAction<SeriesQuery>) {
  if (action.type === fetchSeriesResult.SUCCESS) {
    const series = (action.payload?.Page?.media as Series[]) ?? [];
    yield* put(actions.addSeriesMultiple(series));
  } else {
    console.log("###", action);
  }
}

export default function* () {
  yield* all([
    takeLatest(actions.initSeries, initSeriesSaga),
    takeLatest([fetchSeriesResult.SUCCESS, fetchSeriesResult.FAILURE], fetchSeriesHandler),
  ]);
}
