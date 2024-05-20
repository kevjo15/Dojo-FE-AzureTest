import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="text-sm lg:flex-grow">
      <a href="#docs" className="block mt-4 lg:inline-block lg:mt-0 text-violet-400 hover:text-white mr-4">
        Docs
      </a>
      <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-violet-400 hover:text-white mr-4">
        Contact us
      </a>
      <a href="#plans" className="block mt-4 lg:inline-block lg:mt-0 text-violet-400 hover:text-white">
        View plans
      </a>
    </div>
  );
};

export default Menu;
