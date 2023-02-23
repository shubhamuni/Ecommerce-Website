import { Col, Row, Container } from "react-bootstrap";
import ProductList from "./ProductList";

const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = () => {
  const productList = productsArr.map((prod) => (
    <ProductList
      key={prod.id}
      id={prod.id}
      title={prod.title}
      price={prod.price}
      imageUrl={prod.imageUrl}
    />
  ));
  return (
    <Container className="justify-content-center">
      <Row>
        <Col>
          <ul>{productList}</ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AvailableProducts;
