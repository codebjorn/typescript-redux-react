import { MouseEventHandler, ReactElement, FunctionComponent, useState } from "react";
import { Pane } from "evergreen-ui";
import { Page, UserForm, Error } from "@components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { redirect, storeRegisterUser } from "@helpers";
import { RootState } from "@store";

export interface RegisterData {
  email: string;
  password: string;
}

export const Register: FunctionComponent = (): ReactElement => {
  const [data, setData] = useState({} as RegisterData);
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

  const registerUser: MouseEventHandler = () => {
    storeRegisterUser(data, dispatch);
    if (isAuthenticated) {
      redirect("/dashboard", history);
    }
  };

  return (
    <Page title="Register">
      <Pane
        background="gray100"
        borderRadius={5}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        flexDirection="column"
        padding={20}
        width="100%"
        maxWidth="350px"
      >
        <Error />
        <UserForm
          onUpdate={updateData}
          onSubmit={registerUser}
          isLoading={isLoading}
          heading="Register"
          submitText="Register"
        />
      </Pane>
    </Page>
  );
};
