import { Fragment, useContext } from "react";
import { Container, Nav, Navbar, Button, NavItem } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;
  return (
    <Fragment>
      <header className={classes.header}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home" className="p-1">
              Online Store
            </Navbar.Brand>
            <Nav className="ms-4">
              <NavItem>
                <a href="#" className="nav-link ms-5">
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a href="www.google.com" className="nav-link">
                  Store
                </a>
              </NavItem>
              <NavItem>
                <a href="#" className="nav-link">
                  About
                </a>
              </NavItem>
            </Nav>
            <Button
              onClick={props.onShow}
              className="align-content-end"
              style={{ width: "10rem", height: "30px", paddingBottom: "2rem" }}
              variant="secondary"
            >
              Cart <span>{numberOfCartItems}</span>
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
