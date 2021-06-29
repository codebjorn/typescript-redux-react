import { Button, Heading, Strong } from "evergreen-ui";
import { ReactElement, FunctionComponent } from "react";
import { Goto, Page } from "@components";

export const NotFound: FunctionComponent = (): ReactElement => {
  return (
    <Page title="Oops, not found">
      <Heading is="h1" size={900} marginBottom="10px">
        404
      </Heading>
      <Strong size={500} marginBottom="20px">Can't find what you looking for, try again ^_^</Strong>
      <Goto url="/">
        <Button>Go Home</Button>
      </Goto>
    </Page>
  );
};

