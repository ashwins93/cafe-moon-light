import React from 'react';

import './Header.css';
import NavBar from './NavBar';

const Header = props => {
  return (
    <div className="Header">
      <div className="container">
        <h1>
          Cafe <br /> Moon Light
        </h1>
        <div className="bg-wrapper" />
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
