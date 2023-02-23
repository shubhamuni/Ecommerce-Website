import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Cart(props) {
  return (
    <Container>
      <Form>
        <Modal show={true} onHide={props.onClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>Item</Col>
              <Col>Price</Col>
            </Row>
            <Row>
              <Col>Colors</Col>
              <Col>$ 20</Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
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
