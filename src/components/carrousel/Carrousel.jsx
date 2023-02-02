import React from "react";
import { Carousel, } from "react-bootstrap";
import Img1 from "../imagenes/carrouselGym1.jpg";
import Img2 from "../imagenes/carrouselGym2.jpg";


const Carrousel = () => {
  return (
    <div className="carrouselDiv">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Img1} alt="First slide" />
          <Carousel.Caption>
          <h3>Entrená con nosotros</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img2} alt="Second slide" />
          <Carousel.Caption>
          <h3>Visitá nuestra tienda online</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default Carrousel;