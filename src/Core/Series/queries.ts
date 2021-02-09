import { print } from "graphql";

import { ApiResult, createGQLAction } from "@Middlewares/models";
import { _Series } from "@Schema/anilist.queries";
import type { _SeriesQueryVariables } from "@Schema/anilist";

export const fetchSeriesResult = ApiResult("fetchSeries");

export const fetchSeriesAction = (variables: _SeriesQueryVariables) =>
  createGQLAction({
    endpoint: CONFIG.vars.anilist_endpoint,
    query: print(_Series),
    variables,
    types: [
      fetchSeriesResult.REQUEST,
      fetchSeriesResult.SUCCESS,
      fetchSeriesResult.FAILURE,
    ],
  });
