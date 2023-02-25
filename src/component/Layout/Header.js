import { Fragment } from "react";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="onlinestore" className="p-1">
              Online Store
            </Navbar.Brand>
            <Nav className="ms-4">
              <NavItem>
                <Nav.Link href="Home">Home</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="Store">Store</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="About">About Us</Nav.Link>
              </NavItem>
            </Nav>
            <HeaderCartButton onShow={props.onShow} />
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
