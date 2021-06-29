import { createSlice } from "@reduxjs/toolkit";
import authActions from "./authActions";

export interface AuthState {
  token: string | null;
  isAuthenticated: number | boolean | null;
  isLoading: boolean;
  user: object | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") ?? null,
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: authActions,
});

export const {
  userLoading,
  userLoaded,
  loginSuccess,
  registerSuccess,
  authError,
  loginFail,
  logoutSuccess,
  registerFail,
} = auth.actions;

export default auth.reducer;
