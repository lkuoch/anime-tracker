import { all, put, takeLatest } from "typed-redux-saga/macro";

import { fetchSeriesAction, fetchSeriesResult } from "./queries";
import { actions } from "./redux";
import type { _SeriesQuery } from "@Schema/anilist";

export function* initSeriesSaga() {
  yield* put(fetchSeriesAction({ page: 1 }));
}

export function* fetchSeriesHandler(
  action: IMiddlewareActionResult<_SeriesQuery>
) {
  if (action.type === fetchSeriesResult.SUCCESS) {
    console.log("@", action.payload);
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
