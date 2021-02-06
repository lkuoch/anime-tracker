import { all, put, takeLatest } from "typed-redux-saga/macro";

import { actions } from "./redux";
import { actions as seriesActions } from "@Core/Series/redux";

export function* initAppSaga() {
  yield* put(seriesActions.initSeries());
}

export default function* () {
  yield* all([takeLatest(actions.initApp, initAppSaga)]);
}
