import { ReactNode } from "react";
import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

export interface GotoProps {
  url: string;
  children: ReactNode;
}

const Goto: FunctionComponent<GotoProps> = ({
  url,
  children,
}): ReactElement => {
  return (
    <Link to={url} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default Goto;
