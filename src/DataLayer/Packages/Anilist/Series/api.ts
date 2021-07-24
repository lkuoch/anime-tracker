import { createApi } from "@reduxjs/toolkit/query/react";
import { print } from "graphql";

import { baseApi } from "@Packages/Anilist";
import { Series, SeriesQueryVariables, SeriesQuery } from "@Generated/AnilistSchema";

export const seriesApi = createApi({
  reducerPath: "anlist-series-api",
  baseQuery: baseApi,
  endpoints: (builder) => ({
    getSeries: builder.query<SeriesQuery, SeriesQueryVariables>({
      query: (variables = { page: 0 }) => ({
        url: "",
        method: "POST",
        body: {
          query: print(Series),
          variables,
        },
      }),
      transformResponse: (response: { data: SeriesQuery }) => response.data,
    }),
  }),
});

export const { useGetSeriesQuery } = seriesApi;
