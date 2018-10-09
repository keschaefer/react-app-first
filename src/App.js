import React, { Component } from 'react';
import CartHeader from './components/CartHeader.js';
import Footer from './components/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <CartHeader/>
      <Footer/>
      </div>
    );
  }
}

export default App;
