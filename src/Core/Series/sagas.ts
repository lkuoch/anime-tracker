import { all, put, take, takeLatest } from "typed-redux-saga/macro";
import { PayloadAction } from "@reduxjs/toolkit";

import { fetchSeriesAction, fetchSeriesResult } from "./queries";
import { actions } from "./redux";

export function* initSeriesSaga() {
  yield* put<any>(fetchSeriesAction({ page: 1 }));

  const { type, payload } = yield* take<PayloadAction>([
    fetchSeriesResult.SUCCESS,
    fetchSeriesResult.FAILURE,
  ]);

  console.log("@", type, payload);
}

export default function* () {
  yield* all([takeLatest(actions.initSeries, initSeriesSaga)]);
}
