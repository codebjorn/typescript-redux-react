import { ReactElement, MouseEventHandler, FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { Button, Heading, Pane } from "evergreen-ui";
import { Page } from "@components";
import { logoutSuccess } from "@store/auth";
import { getErrors } from "@store/error";

export const Dashboard: FunctionComponent = (): ReactElement => {
  const dispatch = useDispatch();

  const logoutUser: MouseEventHandler = (): void => {
    const id = "logoutWarning";
    const msg = "Logged out successfully";
    const intent = "success";

    dispatch(getErrors({ msg, status: null, id, intent }));
    dispatch(logoutSuccess());
  };

  return (
    <Page title="Dashboard">
      <Pane textAlign="center" marginBottom="20px">
        <Heading is="h1" size={900} marginBottom="10px">
          Hello, is dashboard
        </Heading>
      </Pane>
      <Pane>
        <Button appearance="primary" marginRight={16} onClick={logoutUser}>
          Log Out
        </Button>
      </Pane>
    </Page>
  );
};
