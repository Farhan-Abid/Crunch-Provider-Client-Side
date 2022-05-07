import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    
    const [inventories,setInventories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])


    return (
        <div className='container'>
            <h1 className='mt-5 mb-5'>Our Inventories</h1>
            <div className='inventories-container'>
            {
                inventories.map(inventory => <Inventory
                key={inventory.id} 
                inventory={inventory}
                ></Inventory>)
            }

            </div>
        </div>
        
    );
};

export default Inventories;