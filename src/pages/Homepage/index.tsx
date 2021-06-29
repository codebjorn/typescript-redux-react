import {
  Button,
  Heading,
  Pane,
  Strong
  } from 'evergreen-ui';
import { FunctionComponent, ReactElement } from 'react';
import { Goto, Page } from '@components';

export const Homepage: FunctionComponent = (): ReactElement => {
  return (
    <Page title="Home">
      <Pane textAlign="center" marginBottom="20px">
        <Heading is="h1" size={900} marginBottom="10px">
          Hello, unknown
        </Heading>
        <Strong size={500}>To proceed further please login or register.</Strong>
      </Pane>
      <Pane>
        <Goto url="/login">
          <Button appearance="primary" marginRight={16}>
            Login
          </Button>
        </Goto>
        <Goto url="/register">
          <Button>Register</Button>
        </Goto>
      </Pane>
    </Page>
  );
};
