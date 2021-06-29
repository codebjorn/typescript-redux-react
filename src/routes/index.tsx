import { FunctionComponent, ReactElement } from "react";
import { Dashboard, Homepage, Login, NotFound, Register } from "@pages";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { useTokenCheck } from "@hooks";

const history = createBrowserHistory();
export const Routing: FunctionComponent = (): ReactElement => {
  useTokenCheck();
  const { isAuthenticated } = useSelector((store: RootState) => store.auth);

  const isAuth = (component: ReactElement) => {
    return isAuthenticated ? <Redirect push to="/dashboard" /> : component;
  };

  const isNotAuth = (component: ReactElement) => {
    return !isAuthenticated ? <Redirect push to="/login" /> : component;
  };

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          {isAuth(<Login />)}
        </Route>
        <Route exact path="/register">
          {isAuth(<Register />)}
        </Route>

        <Route exact path="/dashboard">
          {isNotAuth(<Dashboard />)}
        </Route>

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export type RouteHistory = typeof history;
export default Routing;
