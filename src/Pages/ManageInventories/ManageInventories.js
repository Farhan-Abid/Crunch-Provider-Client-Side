import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [])

  const handleProductDelete = (id) => {
    const proceed = window.confirm('are you sure you want to delete?'); 
    if(proceed){
        console.log('deleting user with id', id);
        const url = `http://localhost:5000/products/${id}`;
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
        <div className='d-flex mt-5 container'>
          <img src={product.img} alt="" />
          <div>
          <h2>{product.name}</h2>
          <br></br>
          <h2>Price: {product.price}</h2>
          <h2>Quantity: {product.quantity}</h2>
          <br></br>
          <button onClick={()=>handleProductDelete(product._id)}className='bg-info'>Delete</button>
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