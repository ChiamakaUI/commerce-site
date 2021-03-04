import React from 'react'
import { Heart } from 'react-bootstrap-icons'
import Uneo from './Images/Uneo.PNG'
import Unos from "./Images/Unos.PNG";
import Usp from "./Images/Usp.PNG";
import Hero from "./Images/Hero.PNG";
import Wild from "./Images/Wild.PNG";


const ProductList = () => {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4">
          
              <img
                src={Unos}
                alt="Chiamaka Ezemba"
                className="img-fluid card"
              />
            

            <h5>Uneo</h5>
            <p>
              N 199 <span>Unisex Pack of 2</span>{" "}
            </p>
            <Heart />
          </div>
          <div className="col-lg-4">
            <img src={Usp} alt="Chiamaka Ezemba" className="img-fluid card" />
            <h5>US Polo</h5>
            <p>
              N 299 <span>Unisex Pack of 3</span>{" "}
            </p>
            <Heart />
          </div>
          <div className="col-lg-4">
            <img src={Hero} alt="Chiamaka Ezemba" className="img-fluid card" />
            <h5>Hero</h5>
            <p>
              N 199 <span>Unisex Pack of 2</span>{" "}
            </p>
            <Heart />
          </div>

          <div className="col-lg-4">
            <img src={Uneo} alt="Chiamaka Ezemba" className="img-fluid card" />
            <h5>Uneo</h5>
            <p>
              N 199 <span>Unisex Pack of 2</span>{" "}
            </p>
            <Heart />
          </div>
          <div className="col-lg-4">
            <img src={Wild} alt="Chiamaka Ezemba" className="img-fluid card" />
            <h5>Wild Craft</h5>
            <p>
              N 150 <span>Unisex Pack of 3</span>{" "}
            </p>
            <Heart />
          </div>
        </div>
      </div>
    );
}

export default ProductList
