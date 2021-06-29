import { RouteHistory } from "@routes";

const redirect = (path: string, history: RouteHistory): void => {
  history.push(path);
};

export default redirect;
