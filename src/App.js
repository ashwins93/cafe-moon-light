import React from 'react';

import Header from './components/Header';
import DishGrid from './components/DishGrid';
import SearchBar from './components/SearchBar';
import data from './dummyData';
import './App.css';

class App extends React.Component {
  state = {
    filterTerm: '',
  };

  handleInputChange = event => {
    this.setState({
      filterTerm: event.target.value,
    });
  };

  render() {
    let filteredData = data;

    if (this.state.filterTerm !== '') {
      filteredData = filteredData.filter(dish => {
        let titleMatch = dish.title
          .toLowerCase()
          .includes(this.state.filterTerm.toLowerCase());

        let ingredientMatch = dish.ingredients.some(ingredient => {
          return ingredient
            .toLowerCase()
            .includes(this.state.filterTerm.toLowerCase());
        });

        return titleMatch || ingredientMatch;
      });
    }

    return (
      <div className="App">
        <Header />
        <SearchBar
          value={this.state.filterTerm}
          handleInputChange={this.handleInputChange}
        />
        <DishGrid data={filteredData} />
      </div>
    );
  }
}

export default App;
