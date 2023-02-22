import { Container, Button, Navbar } from "react-bootstrap";
import AvailableProducts from "./AvailableProduct";

const Product = (props) => {
  return (
    <div>
      <AvailableProducts />
      <Navbar bg="light" variant="light" fixed="bottom">
        <Container>
          <Navbar.Brand>The Generics</Navbar.Brand>
        </Container>
        <Container></Container>
      </Navbar>
    </div>
  );
};

export default Product;
