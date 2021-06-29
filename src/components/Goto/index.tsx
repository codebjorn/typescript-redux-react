import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

const Goto: FunctionComponent<{
  url: string;
  children: ReactElement | ReactElement[] | string;
}> = ({ url, children }): ReactElement => {
  return (
    <Link to={url} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default Goto;
