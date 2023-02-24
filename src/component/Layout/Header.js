import { Fragment, useContext } from "react";
import { Container, Nav, Navbar, Button, NavItem } from "react-bootstrap";
import CartContext from "../../store/CartContext";

import classes from "./Header.module.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Fragment>
      <header className={classes.header}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand
              href="https://react-bootstrap.github.io/components/table/"
              className="p-1"
            >
              Online Store
            </Navbar.Brand>
            <Nav className="ms-4">
              <NavItem>
                <a
                  href="https://react-bootstrap.github.io/components/table/"
                  className="nav-link ms-5"
                >
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a
                  href="https://react-bootstrap.github.io/components/table/"
                  className="nav-link"
                >
                  Store
                </a>
              </NavItem>
              <NavItem>
                <a href="#About" className="nav-link">
                  About
                </a>
              </NavItem>
            </Nav>
            <Button
              onClick={props.onShow}
              className="justify-content-end"
              variant="primary"
              style={{ width: "10rem", height: "2rem" }}
            >
              <span>Cart </span>
              <span>({numberOfCartItems}items )</span>
            </Button>
          </Container>
        </Navbar>
      </header>
      <div className={classes.headline}>
        <Container className="p-1">The Generics</Container>
      </div>
    </Fragment>
  );
};

export default Header;
