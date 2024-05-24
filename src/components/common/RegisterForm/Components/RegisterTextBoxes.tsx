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

const RegisterTextBoxes: React.FC<RegisterTextBoxesProps> = ({}) => {
  return (
    <>
      <TextBox label="First Name" className="mb-4" />
      <TextBox label="Last Name" className="mb-4" />
      <TextBox label="Email" type="email" className="mb-4" />
      <TextBox label="Password" type="password" className="mb-4" />
      <TextBox label="Confirm Password" type="password" className="mb-4" />
    </>
  );
};

export default RegisterTextBoxes;
