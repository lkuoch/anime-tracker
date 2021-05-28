import { all, spawn, call } from "typed-redux-saga/macro";

import { sagas } from "@Core/index";

export default function* rootSagas() {
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
