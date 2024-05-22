import React, { useState } from "react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import AuthButtons from "./components/AuthButtons";
import ToggleButton from "./components/MenuToggleButton";
import DarkModeToggle from "./components/DarkModeToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between flex-wrap bg-violet-950 p-6">
      <Logo />
      <ToggleButton onClick={toggleMenu} />
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Menu />
        <div className="flex items-center justify-between w-full lg:w-auto mt-4 lg:mt-0 ">
          <SearchBar />
          <AuthButtons />
          <div className="flex items-center ml-auto">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
