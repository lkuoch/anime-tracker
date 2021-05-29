import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export const GraphQLBaseQuery = retry(fetchBaseQuery({ baseUrl: CONFIG.vars.anilist_endpoint }), { maxRetries: 3 });
