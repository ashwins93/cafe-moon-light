import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import DishList from './components/DishList';

import data from './dummyData';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {
    filter: '',
  };

  handleInputChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getData() {
    if (this.state.filter === '') return data;

    return data.filter(dish => {
      let name = dish.title
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
      let ingredients = dish.ingredients.some(ingredient => {
        return ingredient
          .toLowerCase()
          .includes(this.state.filter.toLowerCase());
      });

      return name || ingredients;
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <DishList data={this.getData()} />
      </div>
    );
  }
}

export default App;
