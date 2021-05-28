import { print } from "graphql";

import { ApiResult, createGQLAction } from "@Middlewares/models";
import { Series } from "@Shared/GraphQL/series.graphql";

import type { SeriesQueryVariables } from "@Schema";

export const fetchSeriesResult = ApiResult("fetchSeries");

export const fetchSeriesAction = (variables: SeriesQueryVariables) =>
  createGQLAction({
    endpoint: CONFIG.vars.anilist_endpoint,
    query: print(Series),
    variables,
    types: [fetchSeriesResult.REQUEST, fetchSeriesResult.SUCCESS, fetchSeriesResult.FAILURE],
  });
