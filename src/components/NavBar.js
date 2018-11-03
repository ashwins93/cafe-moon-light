import React from 'react';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="container NavBar__links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a className="active" href="#">
            BREAKFAST
          </a>
        </li>
        <li>
          <a href="#">LUNCH</a>
        </li>
        <li>
          <a href="#">DINNER</a>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
