import React from "react";
import TextBox from "../../TextBox/TextBox";

interface RegisterTextBoxesProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterTextBoxes: React.FC<RegisterTextBoxesProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <TextBox
        label="First Name"
        className="mb-4"
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextBox
        label="Last Name"
        className="mb-4"
        value={formData.lastName}
        onChange={handleChange}
      />
      <TextBox
        label="Email"
        type="email"
        className="mb-4"
        value={formData.email}
        onChange={handleChange}
      />
      <TextBox
        label="Password"
        type="password"
        className="mb-4"
        value={formData.password}
        onChange={handleChange}
      />
      <TextBox
        label="Confirm Password"
        type="password"
        className="mb-4"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
    </>
  );
};

export default RegisterTextBoxes;
