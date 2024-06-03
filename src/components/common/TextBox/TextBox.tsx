import React from "react";
import { TEInput } from "tw-elements-react";

interface TextBoxProps {
  type?: string;
  label: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  type = "text",
  label,
  className,
  value,
  onChange,
}) => {
  return (
    <TEInput
      type={type}
      label={label}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextBox;
