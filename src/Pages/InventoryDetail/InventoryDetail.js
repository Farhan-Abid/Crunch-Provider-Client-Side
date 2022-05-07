import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    
    const {id} = useParams();
    const [product,setProduct] = useState({});
    
    useEffect( () => {
        const url =`http://localhost:5000/products/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);

    console.log(product);
    
    return (
        <div>
            <h2>Welcome to Inventory Detail: {product._id}</h2>
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <h3>{product.image}</h3>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <h3>{product.supplier}</h3>
            
            
    
        </div>
    );
};

export default InventoryDetail;