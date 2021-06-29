import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import auth from "./auth";
import error from "./error";

export const store = configureStore({
  reducer: {
    auth,
    error,
  },
  middleware: [
    //
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
