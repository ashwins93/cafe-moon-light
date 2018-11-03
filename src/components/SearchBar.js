import React from 'react';

import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="SearchBar">
      <div className="container">
        <input
          className="fa fa-input"
          placeholder="&#xf002; Search"
          onChange={props.handleInputChange}
          value={props.filter}
        />
      </div>
    </div>
  );
};

export default SearchBar;
