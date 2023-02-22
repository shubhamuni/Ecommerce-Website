import { Button, Card } from "react-bootstrap";
import classes from "./AvailableProduct.module.css";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = () => {
  const productList = productsArr.map((prod) => (
    <div className="d-flex justify-content-between m-3">
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Img variant="top" src={prod.imageUrl} />
        <Card.Body className="">
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>Price $ {prod.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Img variant="top" src={prod.imageUrl} />
        <Card.Body className="">
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>Price $ {prod.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return <div className={classes.product}>{productList}</div>;
};

export default AvailableProducts;
