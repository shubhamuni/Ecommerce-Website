import React, { useContext } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartContext from "../../store/CartContext";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <Row>
      <Col>{item.title}</Col>
      <Col>x {item.amount}</Col>
      <Col>$ {item.price}</Col>
      <div className="d-flex justify-content-end">
        <Button
          className="me-1"
          onClick={cartItemRemoveHandler.bind(null, item.id)}
        >
          -
        </Button>
        <Button className="me-1" onClick={cartItemAddHandler.bind(null, item)}>
          +
        </Button>
      </div>
    </Row>
  ));
  console.log(cartItems);
  return (
    <Container>
      <Form>
        <Modal show={true} onHide={props.onClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "20rem", overflow: "scroll" }}>
            <Row>
              <Col> Items</Col>
              <Col> Amount</Col>
              <Col> Price</Col>
            </Row>
            {cartItems}
          </Modal.Body>
          <Modal.Footer>
            <Col>Total Amount : {totalAmount}</Col>
            <Button variant="secondary" onClick={props.onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.onClose}>
              Order
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </Container>
  );
}

export default Cart;
