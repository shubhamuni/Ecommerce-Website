import { Container, Button, Navbar } from "react-bootstrap";
import AvailableProducts from "./AvailableProduct";

const Product = (props) => {
  return (
    <Container fluid>
      <AvailableProducts />
      <Button
        onClick={props.onShow}
        className="align-content-end m-2"
        style={{
          width: "10rem",
          height: "30px",
          paddingBottom: "2rem",
        }}
        variant="secondary"
      >
        Go to Cart
      </Button>
      <Navbar
        className="p-2 "
        bg="primary"
        variant="light"
        style={{ display: "flex" }}
      >
        <Container>
          <Navbar.Brand>
            <h3>The Generics</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Product;
