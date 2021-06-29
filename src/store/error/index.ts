import { createSlice } from "@reduxjs/toolkit";
import { IntentTypes } from "evergreen-ui";
import errorActions from "./errorActions";

export interface ErrorState {
  msg: string | null;
  status: number | null;
  intent: IntentTypes
}

const initialState: ErrorState = {
  msg: null,
  status: null,
  intent: "warning",
};

export const error = createSlice({
  name: "error",
  initialState,
  reducers: errorActions,
});

export const { getErrors, clearErrors } = error.actions;

export default error.reducer;
