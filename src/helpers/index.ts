import axios, { AxiosResponse } from "axios";
import { LoginData } from "@pages/Login";
import { RegisterData } from "@pages/Register";
import { RouteHistory } from "@routes";
import { AppDispatch } from "@store";
import {
  userLoading,
  loginSuccess,
  loginFail,
  registerSuccess,
  registerFail,
} from "@store/auth";
import { getErrors } from "@store/error";

export const storeLoginUser = (
  data: LoginData,
  dispatch: AppDispatch
): void => {
  const endpoint = `${process.env.REACT_APP_API_URI}/api/login`;

  dispatch(userLoading());
  axios
    .post(endpoint, data)
    .then((response: AxiosResponse) => {
      let responseData = response.data;
      responseData.user = {
        email: data.email,
      };
      dispatch(loginSuccess(responseData));
    })
    .catch((error: any) => {
      const id = "loginErorr";
      const msg = error.response.data.error as string;
      const status = error.response.status as number;
      const intent = "danger";

      dispatch(loginFail());
      dispatch(getErrors({ msg, status, id, intent }));
    });
};

export const storeRegisterUser = (
  data: RegisterData,
  dispatch: AppDispatch
): void => {
  const endpoint = `${process.env.REACT_APP_API_URI}/api/register`;

  dispatch(userLoading());
  axios
    .post(endpoint, data)
    .then((response: AxiosResponse) => {
      let responseData = response.data;
      responseData.user = {
        email: data.email,
      };
      dispatch(registerSuccess(responseData));
    })
    .catch((error: any) => {
      const id = "registerErorr";
      const msg = error.response.data.error as string;
      const status = error.response.status as number;
      const intent = "danger";

      dispatch(registerFail());
      dispatch(getErrors({ msg, status, id, intent }));
    });
};

export const redirect = (path: string, history: RouteHistory): void => {
  history.push(path);
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};
