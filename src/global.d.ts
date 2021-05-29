// Make CONFIG globally available
declare var CONFIG: typeof import("@Config");
declare var INTLN: typeof import("@Intln");

// Import web worker
declare module "worker-loader!*" {
  const value: Function;
  export = value;
}

// Import graphql files
declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;

  export = Schema;
}

// Middleware action result
declare type MiddlewareApiResult<T = any> =
  | import("redux-api-middleware").RSAASuccessTypeDescriptor<any, T>
  | import("redux-api-middleware").RSAAFailureTypeDescriptor<any, T>;

// Store root state
declare type RootState = ReturnType<typeof import("@Store/store").rootReducer>;
declare type AppDispatch = ReturnType<typeof import("@Store/store").configureStore>;
