import { createApi } from "@reduxjs/toolkit/query/react";
import { print } from "graphql";
import { GraphQLBaseQuery } from "@GraphQL/api";
import { Series, SeriesQueryVariables, SeriesQuery } from "@GraphQL/schema";

export const seriesApi = createApi({
  reducerPath: "seriesApi",
  baseQuery: GraphQLBaseQuery,
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
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useGetSeriesQuery } = seriesApi;
