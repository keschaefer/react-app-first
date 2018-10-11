import React from 'react';

const CartItem = (props) => {
    var NewCartItemsList = props.CartItemsList.map(i => {
    return (
        <div className="list-group-item" key = {i.product.name}>
            <div className="row">
                <div className="col-md-8">{i.product.name}</div>
                <div className="col-md-2">{i.product.priceInCents}</div>
                <div className="col-md-2">{i.quantity}</div>
            </div>
        </div>
    )})
    return ( 
    <div className="collection-item">
        {NewCartItemsList}
    </div>
    )
}
export default CartItem;