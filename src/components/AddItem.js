import React from 'react';

const AddItems = (props) => {
    return props.Products.map(i => {
        return (
        <option key = {i.name}>{i.name}</option>
        )})
      }

export default AddItems 