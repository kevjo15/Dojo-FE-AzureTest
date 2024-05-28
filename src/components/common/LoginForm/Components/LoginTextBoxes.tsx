import React from "react";
import { TEInput } from "tw-elements-react";

interface LoginTextBoxesProps {
  formData: {
    username: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginTextBoxes: React.FC<LoginTextBoxesProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <TEInput
        type="text"
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="mb-4"
      />
      <TEInput
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="mb-4"
      />
    </>
  );
};

export default LoginTextBoxes;
