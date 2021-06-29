import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

export const ExampleMiddleware: Middleware =
  (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    //Waiting for side effects
    return next(action);
  };
