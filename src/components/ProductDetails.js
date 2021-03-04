import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
import Unos from "./Images/Unos.PNG";





const ProductDetails = () => {
    return (
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Unos}
              alt="First slide"
              style={{ width: "100px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block  w-100" src={Unos} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block  w-100" src={Unos} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
}

export default ProductDetails
