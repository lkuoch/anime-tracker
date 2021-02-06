import { rawRequest } from "graphql-request";
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";

import { CALL_GQL_MIDDLEWARE_TYPE, ICallGqlPayload } from "./models";

export const callGQLMiddleware: Middleware<Dispatch> = ({
  dispatch,
}: MiddlewareAPI) => (next) => (action: AnyAction) => {
  if (action.type !== CALL_GQL_MIDDLEWARE_TYPE) return next(action);

  // Get body
  const callAPIPayload: ICallGqlPayload = action.payload;

  // Get redux types to return
  const [requestType, successType, failureType] = callAPIPayload.types;

  // Dispatch request type
  dispatch({
    type: requestType,
  });

  // Begin network requests
  return callGQLHandler(callAPIPayload).then(
    (response) =>
      dispatch({
        type: successType,
        payload: response,
      }),
    (error) =>
      dispatch({
        type: failureType,
        error: error || "Error fetching resource",
      })
  );
};

const callGQLHandler = async (callAPIPayload: ICallGqlPayload) => {
  const callApi = async (callAPIPayload: ICallGqlPayload) => {
    const response = await rawRequest(
      callAPIPayload.endpoint,
      callAPIPayload.query,
      callAPIPayload.variables
    );

    if (response.status >= 400)
      throw `Non ok status code with response: ${response}`;

    return response.data;
  };

  // If retry is enabled
  if (callAPIPayload?.retryCount) {
    for (
      let attempts = 0;
      attempts < callAPIPayload.retryCount;
      attempts += 1
    ) {
      try {
        return await callApi(callAPIPayload);
      } catch (err) {
        const isLastAttempt = attempts + 1 === callAPIPayload.retryCount;
        if (isLastAttempt) throw err;
      }
    }
  }

  return callApi(callAPIPayload);
};
