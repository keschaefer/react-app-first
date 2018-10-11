import React, {Component} from 'react';
import CartHeader from './components/CartHeader.js';
import CartFooter from './components/CartFooter.js';
import CartItems from './components/CartItems.js';
import AddItem from './components/AddItem.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      year: '2016',
      copyright: '&copy',
      CartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      Products: [
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

      total: 0,
    };
  }

  onSubmit(product) {
    var newItem = {
      id: this.state.CartItemsList.length + 1,
      product: product, 
      // quantity: quantity.value,
    }
    this.setState({
      CartItemsList: [...this.state.CartItemsList, newItem]
    })
    
    
    // take value of item target and put into newItem, 
    // take quantity.value and put into NewItem.quantity,
    // change state to add the newItem to CartItemsList,

  render() {
    return ( 
      <div>
      <CartHeader />
      <CartItems CartItemsList = {this.state.CartItemsList} />
      <Form onSubmit = {this.onSubmit}/> 
      <CartFooter copyright = {this.state.copyright} year = {this.state.year}/> 
      </div>
    );
  }
}

export default App;

// addItemToCart(item) {
//   var item = { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
//   var newItem= {
//     id: this.state.cartItems.length + 1,
//     product: item,
//     quantity: 32,
//     }
//   this.setState({
//     cartItems: [...this.state.cartItems, newItem]
//   })
// }

// add a prop to the item we want to add to:
// addItemToCart = {props.addItemToCart}- pass a function as a prop to the component 
