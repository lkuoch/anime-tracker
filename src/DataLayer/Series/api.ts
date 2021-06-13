import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { print } from "graphql";
import { Series, SeriesQueryVariables, SeriesQuery } from "@GraphQL/schema";

export const seriesApi = createApi({
  reducerPath: "seriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: CONFIG.vars.anilist_endpoint }),
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
