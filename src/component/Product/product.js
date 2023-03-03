import { Container, Button } from "react-bootstrap";
import Footer from "../Layout/Footer";
import AvailableProducts from "./AvailableProduct";

const Product = () => {
  return (
    <div>
      <Container fluid>
        <AvailableProducts />
        <Button
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
      <Footer />
    </div>
  );
};

export default Product;
