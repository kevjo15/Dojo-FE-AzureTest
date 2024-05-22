import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode ? savedMode === 'true' : true; // Standard är true (dark mode)
  });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={toggleDarkMode}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-white border border-white rounded px-2 py-1 ml-4 focus:outline-none"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="text-gray-500" />
        )}
      </button>
      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded">
          {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        </div>
      )}
    </div>
  );
};

export default DarkModeToggle;
