import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const [inventory,setInventory] = useState([]);
    const {id} = useParams();



    const fetchDetails = () => {
        fetch('inventories.json')
        .then(res => res.json())
        .then(data => setInventory(data))

    };

    useEffect( () => {
        fetchDetails();
    }, []);

    console.log(id);
    
    return (
        <div>
            <h2>Welcome to Inventory Detail: {id}</h2>
            
    
        </div>
    );
};

export default InventoryDetail;