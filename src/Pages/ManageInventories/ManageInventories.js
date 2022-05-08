import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageInventories.css';

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-thicket-44655.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [])

  const handleProductDelete = (id) => {
    const proceed = window.confirm('are you sure you want to delete?'); 
    if(proceed){
        const url = `https://limitless-thicket-44655.herokuapp.com/products/${id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted');
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            }
        })
    }
  
};
    return (
        <div>
            <h2>All Products</h2>
      {products.map((product) => (
        <div className='d-flex mt-5 container manage-inventories'>
          <img src={product.img} alt="" />
          <div>
          <h2 className='bg-info rounded'>{product.name}</h2>
          <br></br>
          <h2>Price: {product.price}</h2>
          <h2>Quantity: {product.quantity}</h2>
          <h2>Description: {product.description}</h2>
          <br></br>
          <button onClick={()=>handleProductDelete(product._id)}className='bg-info rounded'>Delete</button>
          </div>

        </div>
      ))}
      <Link to='/additem'>
          <button >Add Item</button>
      </Link>
        </div>
    );
};

export default ManageInventories;