import { Fragment } from "react";
import { Carousel, Container, ListGroup, Navbar } from "react-bootstrap";
import classes from "./../Layout/Header.module.css";
const ProductDetails = () => {
  return (
    <Fragment>
      <div className={classes.headline}>
        <Container className="p-1">The Generics</Container>
      </div>
      <div className=" m-5 p-5">
        <div style={{ textAlign: "center" }}>
          <h1>Product Details</h1>
        </div>
        <section className="d-flex">
          <span>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Album 1.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={null}>
                <img
                  className="d-block w-100"
                  src="/Album 1.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-90"
                  src="/Album 1.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </span>
          <span
            style={{ marginLeft: "15rem", marginTop: "3rem", padding: "10px" }}
          >
            <ListGroup>
              <ListGroup.Item>* Product Specification *</ListGroup.Item>
              <ListGroup.Item>Full Sleeve Printed Hooded Color</ListGroup.Item>
              <ListGroup.Item>Some lorem text we can add here</ListGroup.Item>
              <ListGroup.Item>Porta and more colors of heven</ListGroup.Item>
              <ListGroup.Item>
                Vestibulum these are the specifications of product
              </ListGroup.Item>
            </ListGroup>
          </span>
        </section>
        <div
          style={{ marginLeft: "10rem", marginTop: "3rem", padding: "10px" }}
        >
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
        <h1>Reviews</h1>
      </div>
      <Navbar variant="dark" bg="dark" className="p-3">
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Navbar.Text>Contact Us</Navbar.Text>
      </Navbar>
    </Fragment>
  );
};

export default ProductDetails;
