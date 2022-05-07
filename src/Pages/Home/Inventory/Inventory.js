import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({inventory}) => {
    const {_id,name,img,quantity,supplier,price,description} = inventory;

    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);

    }
    return (
        <div className='inventory border-end rounded'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p><small>Description: {description}</small></p>
            <button onClick={ () => navigateToInventoryDetail(_id)} className='btn btn-info'>Update</button>

        </div>
    );
};

export default Inventory;