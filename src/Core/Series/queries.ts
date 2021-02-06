import { ApiResult, createGQLAction } from "@Middlewares/models";
import { gql } from "graphql-request";

export const fetchSeriesResult = ApiResult("fetchSeriesResult");

export const fetchSeriesAction = (variables: { page: number }) =>
  createGQLAction({
    query: gql`
      query($page: Int) {
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
    endpoint: CONFIG.vars.anilist_endpoint,
    variables,
    types: [
      fetchSeriesResult.REQUEST,
      fetchSeriesResult.SUCCESS,
      fetchSeriesResult.FAILURE,
    ],
  });
