import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export default retry(
  fetchBaseQuery({
    baseUrl: _CONFIG_.vars.anilist_endpoint,
  }),
  {
    maxRetries: 3,
  }
);
