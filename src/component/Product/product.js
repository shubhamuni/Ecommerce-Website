import { Container, Button, Navbar } from "react-bootstrap";
import AvailableProducts from "./AvailableProduct";

const Product = (props) => {
  return (
    <div>
      <Container fluid>
        <AvailableProducts />
        <Button
          onClick={props.onShow}
          style={{
            width: "10rem",
            height: "30px",
            paddingBottom: "2rem",
            marginBottom: "1rem",
          }}
          variant="dark"
        >
          Go to Cart
        </Button>
      </Container>
      <Navbar className="p-1 " bg="primary" variant="light">
        <Container>
          <Navbar.Brand>
            <h3>The Generics</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Product;
