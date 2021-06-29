import { Pane } from "evergreen-ui";
import { FunctionComponent, ReactElement } from "react";
import { useHeadTitle } from "@hooks";

export interface PageProps {
  title: string;
  children: ReactElement | ReactElement[];
}

const Page: FunctionComponent<PageProps> = ({
  title,
  children,
}): ReactElement => {
  useHeadTitle(title);
  return (
    <Pane
      height="calc(100vh - 1rem)"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Pane>
  );
};

export default Page;
