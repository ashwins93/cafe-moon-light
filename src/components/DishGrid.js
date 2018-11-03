import React from 'react';

import './DishGrid.css';
import Dish from './Dish';

const DishGrid = props => {
  console.log(props);
  return (
    <div className="DishGrid">
      <div className="container">
        {props.data.map(dish => (
          <Dish dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default DishGrid;
