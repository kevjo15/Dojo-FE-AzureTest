import React from "react";
import { TEInput } from "tw-elements-react";

interface TextBoxProps {
  type?: string;
  label: string;
  className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  type = "text",
  label,
  className,
}) => {
  return <TEInput type={type} label={label} className={className} />;
};

export default TextBox;
