import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import DishList from './components/DishList';

import data from './dummyData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DishList data={data} />
      </div>
    );
  }
}

export default App;
