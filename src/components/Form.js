import React from 'react';

const Form = (props) => {
    return (
    <form className="form-group">
        <p>Total $</p>
        <label>Quantity</label>
            <input type="number" className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
        <div id="product-menu">
            <label>Products</label>
            <select>
                <option>Select an Option...</option>
                <AddItem Products = {this.state.Products} />
            </select>
        </div> 
        <button id="submit">Submit</button>
    </form>
    )
}




export default Form;