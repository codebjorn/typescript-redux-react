import { useEffect } from "react";
import { useTheme as useBaseTheme } from "evergreen-ui";
import { Theme } from "@theme";
import { useDispatch } from "react-redux";
import { getAuthToken } from "@helpers";
import { userLoaded } from "@store/auth";

/* Head Hooks */

export const useHeadTitle = (title: string) =>
  useEffect(() => {
    document.title = title;
  }, [title]);

/* UI Hooks */

export const useTheme = (): Theme => useBaseTheme();

/* Request Hooks */

export const useTokenCheck = (): void => {
  const token = getAuthToken();
  const dispatch = useDispatch();

  if (token) {
    //Here should be refresh token, or API call to check
    dispatch(userLoaded());
  }
};
