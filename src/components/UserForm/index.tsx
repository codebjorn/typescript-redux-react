import {
  MouseEventHandler,
  BaseSyntheticEvent,
  ChangeEventHandler,
  FunctionComponent,
  ReactElement,
} from "react";
import { Pane, Heading, TextInputField, Button } from "evergreen-ui";

export interface UserFormProps {
  onUpdate: CallableFunction;
  onSubmit: MouseEventHandler;
  isLoading: boolean;
  heading: string;
  submitText: string;
}

export const UserForm: FunctionComponent<UserFormProps> = ({
  onUpdate,
  onSubmit,
  isLoading,
  heading,
  submitText,
}): ReactElement => {
  const handleChange: ChangeEventHandler = (e: BaseSyntheticEvent) => {
    const { type, value } = e.currentTarget;
    onUpdate(type, value);
  };

  return (
    <Pane>
      <Heading size={700} textAlign="center" paddingBottom="2rem">
        {heading}
      </Heading>
      <TextInputField
        required
        label="Email"
        type="email"
        onChange={handleChange}
      />
      <TextInputField
        required
        label="Password"
        type="password"
        onChange={handleChange}
      />
      <Button
        appearance="primary"
        marginBottom="2rem"
        justifyContent="center"
        width="100%"
        onClick={onSubmit}
        isLoading={isLoading}
      >
        {submitText}
      </Button>
    </Pane>
  );
};
