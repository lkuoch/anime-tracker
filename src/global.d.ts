// Make CONFIG globally available
declare var CONFIG: typeof import("@Config");
declare var INTLN: typeof import("@Intln");

// Import web worker
declare module "worker-loader!*" {
  const value: Function;
  export = value;
}

/// Global types

// Middleware action result
declare type IMiddlewareActionResult<T = any> =
  | import("redux-api-middleware").RSAASuccessTypeDescriptor<any, T>
  | import("redux-api-middleware").RSAAFailureTypeDescriptor<any, T>;

// Store root state
declare type IRootState = ReturnType<typeof import("@Store/redux").rootReducer>;
