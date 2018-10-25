import React, {Component} from 'react';
import CartHeader from './components/CartHeader.js';
import CartFooter from './components/CartFooter.js';
import CartItems from './components/CartItems.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      year: '2016',
      copyright: '&copy',
      cartItemsList: [ ],
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      quantity: 0,
      name: '',
      id: '',
      price: 0,
      total: 0,
    };
  }

onChangeName = (event) => {
this.setState({
    name: event.target.value,
  })
}

onChangeQuantity = (event) => {
  this.setState({
    quantity: event.target.value
  })
}
    
addItemCart = (event) => {
  event.preventDefault() 
  var tempItem = this.state.products.filter(i => {
      return i.name === this.state.name
  })
  var newItem = {
    id: this.state.cartItemsList.length + 1, 
    product: { 
      id: tempItem[0].id, 
      name: this.state.name, 
      priceInCents: tempItem[0].priceInCents }, 
      quantity: this.state.quantity,
      itemTotal: Number(((this.state.quantity * tempItem[0].priceInCents)/100).toFixed(2)) }
  this.setState({
    cartItemsList: [...this.state.cartItemsList, newItem],
    total: this.state.total + newItem.itemTotal
    })
  }

  render() {
    return ( 
      <div>
        <CartHeader />
        <CartItems 
        cartItemsList = {this.state.cartItemsList} 
        total = {this.state.total} 
        onChangeName = {this.onChangeName} 
        addItemCart = {this.addItemCart}
        onChangeQuantity = {this.onChangeQuantity}
        products = {this.state.products}
        />
        <CartFooter 
        year = {this.state.year}
        /> 
      </div>
    );
  }
}

export default App;