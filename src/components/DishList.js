import React from 'react';

import './DishList.css';
import Dish from './Dish';

const DishList = props => {
  console.log(props.data);
  return (
    <section className="DishList">
      <div className="container">
        {props.data.map(dish => (
          <Dish dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default DishList;
