import React, { useState } from 'react';
import './Button.css';
import Sidebar from '../Sidebar/Sidebar';
const Button = () => {

  const [toggle, setToggle] = useState(true);

  // const toggleSidebarVisibility = () => {
  //   setSidebarVisibility(!isSidebarVisible);
  // };

  return (
    <div className="button-container">
      <button onClick ={() => setToggle(!toggle)} className="hamburger"> Click Me </button>
      {toggle && (<Sidebar/>)}
    </div>
  );
};
  
export default Button;