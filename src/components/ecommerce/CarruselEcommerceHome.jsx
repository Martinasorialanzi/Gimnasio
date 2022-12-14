import React from 'react'
import { Carousel,Button } from 'react-bootstrap'
import '../ecommerce/ecommerce.css'

const CarruselEcommerceHome = () => {
  return (
    <Carousel>
    <Carousel.Item>
   
      <img
        className="d-block w-100 h-50"
        src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/November_Desktop_Mens_1800x.jpg?v=1668528184"
        alt="First slide"
      />
      <Carousel.Caption>
    
      <Button className='bg-dark border-dark'>SHOP NOW</Button>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/November_Desktop_Womens_1800x.jpg?v=1668528183"
        alt="Second slide"
      />

      <Carousel.Caption>
      <Button className='bg-dark border-dark'>SHOP NOW</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/November_Desktop_New_Arrivals_1800x.jpg?v=1668528183"
        alt="Third slide"
      />

      <Carousel.Caption>
        <Button className='bg-dark border-dark'>SHOP NOW</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )
}

export default CarruselEcommerceHome