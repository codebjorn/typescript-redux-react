import {
  ReactElement,
  MouseEventHandler,
  useState,
  FunctionComponent,
} from "react";
import { Pane, Text } from "evergreen-ui";
import { Page, Goto, Error, UserForm } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "@store";
import { redirect, storeLoginUser } from "@helpers";

export interface LoginData {
  email: string;
  password: string;
}

export const Login: FunctionComponent = (): ReactElement => {
  const [data, setData] = useState({} as LoginData);
  const { isLoading, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const updateData = (key: string, value: string | null) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const loginUser: MouseEventHandler = () => {
    storeLoginUser(data, dispatch);
    if (isAuthenticated) {
      redirect("/dashboard", history);
    }
  };

  return (
    <Page title="Login">
      <Pane
        background="gray100"
        borderRadius={5}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        flexDirection="column"
        padding={20}
        width="100%"
        maxWidth="380px"
      >
        <Error />
        <UserForm
          onUpdate={updateData}
          onSubmit={loginUser}
          isLoading={isLoading}
          heading="Log in"
          submitText="Log in"
        />
        <Text textAlign="center">
          Don't have an account? <Goto url="/register">Sign up</Goto>
        </Text>
      </Pane>
    </Page>
  );
};
