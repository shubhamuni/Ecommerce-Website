import { Fragment } from "react";
import { Carousel, ListGroup } from "react-bootstrap";

const SpottedProduct = (props) => {
  return (
    <Fragment>
      <section className="d-flex">
        <span>
          <Carousel slide={false}>
            <Carousel.Item>
              <img src={props.imageUrl} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="" src={props.imageUrl} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={props.imageUrl} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </span>
        <span
          style={{ marginLeft: "15rem", marginTop: "3rem", padding: "10px" }}
        >
          <ListGroup>
            <ListGroup.Item>* {props.title} *</ListGroup.Item>
            <ListGroup.Item>* Product Specification *</ListGroup.Item>
            <ListGroup.Item>Full Sleeve Printed Hooded Color</ListGroup.Item>
            <ListGroup.Item>Some lorem text we can add here</ListGroup.Item>
            <ListGroup.Item>Porta and more colors of heven</ListGroup.Item>
            <ListGroup.Item>
              Vestibulum these are the specifications of product
            </ListGroup.Item>
            <ListGroup.Item>{` Price  $ ${props.price}`}</ListGroup.Item>
          </ListGroup>
        </span>
      </section>
      <div style={{ marginLeft: "10rem", marginTop: "3rem", padding: "10px" }}>
        <h1>Reviews</h1>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    </Fragment>
  );
};

export default SpottedProduct;
