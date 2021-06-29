import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState, TOKEN_NAME } from ".";

const authSuccess = (
  state: AuthState,
  action: PayloadAction<{ [key: string]: any }>
) => {
  localStorage.setItem(TOKEN_NAME, action.payload.token);

  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isAuthenticated = true;
  state.isLoading = false;
};

const authClean = (state: AuthState) => {
  localStorage.removeItem(TOKEN_NAME);

  state.token = null;
  state.isAuthenticated = null;
  state.isLoading = false;
  state.user = null;
};

const authActions = {
  userLoading: (state: AuthState) => {
    state.isLoading = true;
  },
  userLoaded: (state: AuthState) => {
    state.isAuthenticated = true;
  },
  loginSuccess: (state: AuthState, action: PayloadAction<{}>) => {
    authSuccess(state, action);
  },
  registerSuccess: (state: AuthState, action: PayloadAction<{}>) => {
    authSuccess(state, action);
  },
  authError: (state: AuthState) => {
    authClean(state);
  },
  loginFail: (state: AuthState) => {
    authClean(state);
  },
  logoutSuccess: (state: AuthState) => {
    authClean(state);
  },
  registerFail: (state: AuthState) => {
    authClean(state);
  },
};

export default authActions;
