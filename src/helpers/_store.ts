import { LoginData } from "@pages/Login";
import { RegisterData } from "@pages/Register";
import { AppDispatch } from "@store";
import {
  userLoading,
  loginSuccess,
  loginFail,
  registerSuccess,
  registerFail,
} from "@store/auth";
import { getErrors } from "@store/error";
import axios, { AxiosResponse } from "axios";
import {endpoints} from "./_endpoints";

export const storeLoginUser = (
  data: LoginData,
  dispatch: AppDispatch
): void => {
  dispatch(userLoading());
  axios
    .post(endpoints.login, data)
    .then((response: AxiosResponse) => {
      const responseData = response.data;
      responseData.user = {
        email: data.email,
      };
      dispatch(loginSuccess(responseData));
    })
    .catch((error: any) => {
      const msg = error.response.data.error as string;
      const status = error.response.status as number;
      const intent = "danger";

      dispatch(loginFail());
      dispatch(getErrors({ msg, status, intent }));
    });
};

export const storeRegisterUser = (
  data: RegisterData,
  dispatch: AppDispatch
): void => {
  dispatch(userLoading());
  axios
    .post(endpoints.register, data)
    .then((response: AxiosResponse) => {
      let responseData = response.data;
      responseData.user = {
        email: data.email,
      };
      dispatch(registerSuccess(responseData));
    })
    .catch((error: any) => {
      const msg = error.response.data.error as string;
      const status = error.response.status as number;
      const intent = "danger";

      dispatch(registerFail());
      dispatch(getErrors({ msg, status, intent }));
    });
};
