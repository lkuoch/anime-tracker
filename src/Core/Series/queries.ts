import { print } from "graphql";

import { ApiResult, createGQLAction } from "@Middlewares/models";
import { Series } from "@Schema/anilist.queries";
import type { SeriesQueryVariables } from "@Schema/anilist";

export const fetchSeriesResult = ApiResult("fetchSeries");

export const fetchSeriesAction = (variables: SeriesQueryVariables) =>
  createGQLAction({
    endpoint: CONFIG.vars.anilist_endpoint,
    query: print(Series),
    variables,
    types: [
      fetchSeriesResult.REQUEST,
      fetchSeriesResult.SUCCESS,
      fetchSeriesResult.FAILURE,
    ],
  });
