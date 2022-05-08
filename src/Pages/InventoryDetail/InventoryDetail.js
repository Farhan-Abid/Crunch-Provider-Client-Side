import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://limitless-thicket-44655.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handleUpdateProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedProduct = { name, email };

        // send data to the server
        const url = `https://limitless-thicket-44655.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('users added succesfully!!!')
                event.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        }
        console.log(product);

        return (
            <div>
                <h2>Welcome to Product Detail</h2>
                <div className='inventory-detail container'>
                <img src={product.img} alt="" />
                <h2>{product.name}</h2>
                <h3>Description: {product.description}</h3>
                <h3>Price: {product.price} taka</h3>
                <h3>Quantity: {product.quantity} pcs</h3>
                <h3>Supplier: {product.supplier}</h3>
                </div>
                <form onSubmit={handleUpdateProduct}>
                    <input type="number" name='number' placeholder='Quantity' required />
                    <br />
                    <input type="submit" value="Delivered" />
                </form>


            </div>
        );
    };

    export default InventoryDetail;