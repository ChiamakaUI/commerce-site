import React from "react";
import { Heart } from "react-bootstrap-icons";
import { masks } from './const';

const ProductList = (props) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {
          masks.map((e, index)=>(
            <div key={index} className="col-lg-4" onClick={()=>props.history.push(`/facemasks/${e.id}`)}>
              <img src={e.image} alt="Chiamaka Ezemba" className="img-fluid card" />
              <h5>{e.name}</h5>
              <p>N {e.price.toString()} <span>{e.description}</span>{" "}</p>
              <Heart />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;
