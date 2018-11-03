import React from 'react';

import './Header.css';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header class="Header">
      <div className="container Header__bg-heading">
        <h1>
          Cafe <br /> Moon Light
        </h1>
        <div className="bg-wrapper" />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
