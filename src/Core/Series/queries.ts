import { gql } from "graphql-request";

import { ApiResult, createGQLAction } from "@Middlewares/models";
import type { _SeriesQuery, _SeriesQueryVariables } from "@Schema/anilist";

export const fetchSeriesResult = ApiResult("fetchSeries");

export const fetchSeriesAction = (variables: _SeriesQueryVariables) =>
  createGQLAction({
    endpoint: CONFIG.vars.anilist_endpoint,
    query: gql`
      query _Series($page: Int) {
        Page(page: $page) {
          media {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              extraLarge
            }
            bannerImage
          }
        }
      }
    `,
    variables,
    types: [
      fetchSeriesResult.REQUEST,
      fetchSeriesResult.SUCCESS,
      fetchSeriesResult.FAILURE,
    ],
  });
