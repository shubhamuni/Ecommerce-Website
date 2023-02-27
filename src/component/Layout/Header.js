import { Fragment } from "react";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
              <NavItem className="p-2 ">
                <NavLink
                  style={{ textDecoration: "none", color: "#f3f3f3" }}
                  to="Home"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ">
                <NavLink
                  style={{ textDecoration: "none", color: "#f3f3f3" }}
                  to="Store"
                >
                  Store
                </NavLink>
              </NavItem>
              <NavItem className="p-2 ">
                <NavLink
                  style={{ textDecoration: "none", color: "#f3f3f3" }}
                  to={"About"}
                >
                  About us
                </NavLink>
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
