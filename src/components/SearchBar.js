import React from 'react';

import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="SearchBar">
      <input value={props.value} onChange={props.handleInputChange} type="text" className="fa fa-input" placeholder=" Search" />
    </div>
  );
};

export default SearchBar;
