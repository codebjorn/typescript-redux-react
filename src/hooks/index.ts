import { useEffect } from "react";
import { useTheme as useBaseTheme } from "evergreen-ui";
import { Theme } from "@theme";
import { useDispatch } from "react-redux";
import { TOKEN_NAME, userLoaded } from "@store/auth";

/* Head Hooks */

export const useHeadTitle = (title: string) =>
  useEffect(() => {
    document.title = title;
  }, [title]);

/* UI Hooks */

export const useTheme = (): Theme => useBaseTheme();

/* Request Hooks */

export const useAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const useTokenCheck = (): void => {
  const token = useAuthToken();
  const dispatch = useDispatch();

  if (token) {
    //Here should be refresh token, or API call to check
    dispatch(userLoaded());
  }
};
