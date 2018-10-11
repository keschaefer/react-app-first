import React, {Component} from 'react';
import CartHeader from './components/CartHeader.js';
import CartFooter from './components/CartFooter.js';
import CartItems from './components/CartItems.js';
import AddItem from './components/AddItems';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      year: '2016',
      copyright: '&copy',
      CartItemsList: 
      [ { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
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
      quantity: 0,
      name: ''
    };
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
    console.log(this.state.name)
  }

  onChangeQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
    console.log(this.state.quantity)
  }
    
  addItemCart = (event) => {
    event.preventDefault()
    console.log(this.state.name)
    console.log(this.state.quantity)
    var newItem = this.state.Products.filter(item => {
      return this.state.Products[item].name === this.state.name
      
    }) 
    console.log(newItem)
    // this.setState({
    //   cartItemsList: [...this.state.cartItemsList, newItem]
    // })
  }

  render() {
    return ( 
      <div>
      <CartHeader />
      <CartItems CartItemsList = {this.state.CartItemsList} />
      <div className= "form-container">
      <form className="form-group">
        <p>Total $</p>
        <label>Quantity</label>
          <input type="number" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange= {this.onChangeQuantity}></input>
        <label>Products</label>
            <select onChange={this.onChangeName}>
                <option>Select an Option...</option>
                <AddItem Products = {this.state.Products} />
            </select>
        <button id="submit" onClick= {this.addItemCart}>Submit</button>
      </form>
      </div>
      <CartFooter copyright = {this.state.copyright} year = {this.state.year}/> 
      </div>
    );
  }
}

export default App;