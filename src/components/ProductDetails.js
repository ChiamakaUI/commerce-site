import React from 'react';
import { masks } from './const';
import { Container } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
// import Unos from "./Images/Unos.PNG";

const ProductDetails = (props) => {

    const [state, setState] = React.useState({
      loading: true,
      mask: undefined
    });

    React.useEffect(()=>{
      // eslint-disable-next-line eqeqeq
      let mask = masks.find((item)=>item.id == props.match.params.id);
      if(typeof mask !== 'undefined'){
        setState(state=>({loading: false, mask: mask}))
      }
    }, [setState, props]);

    return (
      <>
        {
          state.loading ? <div>Loading...</div> :
            state.mask === undefined ? <div>Not Found</div>
              : <Container fluid>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={state.mask.image}
                  alt="First slide"
                  style={{ width: "100px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block  w-100" src={state.mask.image} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block  w-100" src={state.mask.image} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Container>
        }

      </>
    );
}

export default ProductDetails
