import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img height={490}
          className="d-block w-100"
          src="https://previews.123rf.com/images/messer16/messer161705/messer16170500035/78201566-%EA%B0%90%EC%9E%90-%EC%B9%A9-%EA%B4%91%EA%B3%A0-%EB%B2%A1%ED%84%B0-%EB%B0%94%EB%8B%A4-%EC%86%8C%EA%B8%88%EA%B3%BC-%EA%B0%90%EC%9E%90-%EC%B9%A9%EC%9D%98-%ED%98%84%EC%8B%A4%EC%A0%81%EC%9D%B8-%EA%B7%B8%EB%A6%BC-%EC%A0%9C%ED%92%88-%EA%B0%80%EB%A1%9C-%EB%B0%B0%EB%84%88%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark'>Best Service with 100% Priority</h3>
          <p className='text-dark'>Deal with us to get the best possible deals from crunch mania!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={490}
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0449/4809/5136/files/snacks-1770x800px.png?v=1602891970"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Best Crunchies dealer of the town</h3>
          <p className='text-dark'>We have the recognition to service at the fastest rate possible to you!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={490}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/potato-chips-empty-space-text-light-blue-background-top-view-flat-lay-banner_164357-10479.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Best Chips dealer of the town</h3>
          <p className='text-dark'>
          We have the recognition to service at the fastest rate possible to you!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
 


export default Banner;