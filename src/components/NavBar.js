import React from 'react';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="container">
        <a href="#">HOME</a>
        <a href="#" className="active">
          BREAKFAST
        </a>
        <a href="#">LUNCH</a>
        <a href="#">DINNER</a>
      </div>
    </nav>
  );
};

export default NavBar;
