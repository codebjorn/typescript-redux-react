import { Alert } from "evergreen-ui";
import { FunctionComponent, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import { ErrorState, clearErrors } from "@store/error";

export const Error: FunctionComponent = (): ReactElement => {
  const dispatch = useDispatch();
  const error: ErrorState = useSelector((store: RootState) => store.error);

  const clean = () => {
    dispatch(clearErrors());
  };

  return error.msg ? (
    <Alert
      marginY={10}
      title={`${error.status ? `${error.status}:` : ""} ${error.msg}`}
      intent={error.intent}
      isRemoveable
      onRemove={clean}
    />
  ) : (
    <></>
  );
};