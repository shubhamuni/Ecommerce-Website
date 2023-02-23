import ProductForm from "./ProductForm";
import { Card, Button } from "react-bootstrap";
import Input from "../UI/Input";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <section className="d-flex justify-content-between m-3">
      <Card style={{ width: "25rem" }} className="m-5">
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Price {price}</Card.Text>
          <ProductForm onAddToCart={addToCartHandler} />
        </Card.Body>
      </Card>
    </section>
  );
};

export default ProductList;
