import React from 'react';

const AddItems = (props) => {
    return props.Products.map(i => {
        return (
        <option key = {i.id}>{i.name}</option>
        )})
      }

export default AddItems