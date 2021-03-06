import { PayloadAction } from "@reduxjs/toolkit";
import { ErrorState } from ".";

const errorActions = {
  getErrors: (state: ErrorState, action: PayloadAction<ErrorState>) => {
    state.msg = action.payload.msg;
    state.status = action.payload.status;
    state.intent = action.payload.intent;
  },
  clearErrors: (state: ErrorState) => {
    state.msg = null;
    state.status = null;
  },
};

export default errorActions;
