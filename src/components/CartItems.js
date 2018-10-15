import React from 'react';
import CartItem from './CartItem';


const CartItems = (props) => {
    return ( 
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
          <CartItem CartItemsList = {props.CartItemsList} />
        </div>
      </div>
    )
}

export default CartItems;