import React from 'react';

import './Dish.css';

const Dish = props => {
  console.log(props.dish);
  return (
    <div className="Dish">
      <img
        className="img"
        src={`/assets/${props.dish.image}`}
        alt={props.dish.title}
      />
      <h2>{props.dish.title}</h2>
      <p className="price">{props.dish.price}</p>
      <p className="ingredients">{props.dish.ingredients.join(', ')}</p>
    </div>
  );
};

export default Dish;
