import React from 'react';


const CartItem = (props) => {
    return props.cartItemsList.map(i => {
        return (
            <div className="list-group-item" key = {i.product.name}>
                <div className="row">
                    <div className="col-md-8">{i.product.name}</div>
                    <div className="col-md-2">$ {((i.product.priceInCents)/100).toFixed(2)}</div>
                    <div className="col-md-2">{i.quantity}</div>
                </div>
            </div>
        )})
}

export default CartItem;