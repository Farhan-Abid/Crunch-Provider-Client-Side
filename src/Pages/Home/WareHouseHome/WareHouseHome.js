import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Testimonial from '../Testimonial/Testimonial';



const WareHouseHome = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <h1 className='mt-5 mb-5'>Our Dealer's Reviews</h1>
            <Testimonial></Testimonial>
        </div>
    );
};

export default WareHouseHome;