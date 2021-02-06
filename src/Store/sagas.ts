import { all, spawn, call } from "typed-redux-saga/macro";

import appSagas from "@Core/App/sagas";
import seriesSagas from "@Core/Series/sagas";

// Allow sagas to be restarted in event of failure
export default function* rootSagas() {
  const sagas = [appSagas, seriesSagas];

  yield* all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (err) {
            console.log("[ERROR]:", saga, err);
          }
        }
      })
    )
  );
}
