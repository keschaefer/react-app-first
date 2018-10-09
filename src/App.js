import React, { Component } from 'react';
import CartHeader from './components/CartHeader.js';
import CartFooter from './components/CartFooter.js';
import CartItems from './components/CartItems.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <CartHeader/>
      <CartItems/>
      <CartFooter year = {this.state.year}/>
      </div>
    );
  }
}

export default App;
