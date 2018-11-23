import React, { Component } from 'react';
import AppNavbar from './components/appnavbar';
import ShoppingList from './components/shoppinglist';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
