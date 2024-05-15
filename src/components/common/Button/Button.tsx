import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="bg-cyan-500 hover:bg-cyan-600" onClick={onClick}>
      {children}
    </button>
  );
};
