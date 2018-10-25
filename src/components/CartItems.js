import React from 'react';
import CartItem from './CartItem';
import AddItems from './AddItems'


const CartItems = (props) => {
    return ( 
      <div>
        <div className="container cart-items">
          <h1>Cart Items</h1>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-8"><b>Product</b></div>
                <div className="col-md-2"><b>Unit Price</b></div>
                <div className="col-md-2"><b>Quantity</b></div>
              </div>
            </div>
            <CartItem cartItemsList = {props.cartItemsList} />
          </div>
        </div>
        <div  className= "form-container">
          <form className="form-group">
            <p className= "title">Total ${props.total}</p>
            <label className= "title">Quantity</label>
              <input type="number" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange= {props.onChangeQuantity}></input>
            <div className = "product-container">
              <label className= "title">Products</label>
              <select onChange={props.onChangeName}>
                <option>Select an Option...</option>
                <AddItems products = {props.products} />
              </select>
            </div>
            <button id="submit" onClick= {props.addItemCart}>Submit</button>
          </form>
        </div>
      </div>
    )
}

export default CartItems;