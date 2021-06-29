import { RouteHistory } from "@routes";

export const redirect = (path: string, history: RouteHistory): void => {
  history.push(path);
};
