import { DeepExtractTypeSkipArrays } from "ts-deep-extract-types";
import { SeriesQuery } from "@GraphQL/schema";

export type Series = DeepExtractTypeSkipArrays<SeriesQuery, ["Page", "media"]>;
export interface InnerState {
  inner: {
    currentPage: number;
  };
}
