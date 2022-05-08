import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const axios = require('axios');

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://limitless-thicket-44655.herokuapp.com/myproducts?email=${email}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
      const handleProductDelete = (id) => {
        const proceed = window.confirm('are you sure you want to delete?'); 
        if(proceed){
            console.log('deleting user with id', id);
            const url = `https://limitless-thicket-44655.herokuapp.com/${id}`;
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
          
            </div>
        );
    };
export default MyItems;