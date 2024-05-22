import React from "react";

interface AuthButtonsProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  onLoginClick,
  onSignUpClick,
}) => {
  return (
    <div className="flex space-x-4 mt-4 lg:mt-0 lg:translate-y-0 translate-y-[-7px]">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onSignUpClick();
        }}
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-violet-400 hover:bg-white ml-4 mt-0"
      >
        Sign up
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onLoginClick();
        }}
        className="inline-block bg-white text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-black hover:bg-violet-400 ml-4"
      >
        Login
      </a>
    </div>
  );
};

export default AuthButtons;
