import React, { useState } from 'react';
import './Button.css';

const Button = () => {

  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebarVisibility = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <div className="button-container">
      <button className="hamburger"> Click Me </button>
    </div>
  );
};
  
export default Button;