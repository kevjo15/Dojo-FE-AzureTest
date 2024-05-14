import { ReactNode } from "react";

export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button className="bg-cyan-500 hover:bg-cyan-600" onClick={onClick}>
      {children}
    </button>
  );
};
