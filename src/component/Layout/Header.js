import { Fragment, useContext } from "react";
import { Button, Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const authCtx = useContext(CartContext);
  const islogin = authCtx.isLoggedIn;
  return (
    <Fragment>
      <div className={classes.headline}>
        <Container className="p-1">The Generics</Container>
      </div>
      <header className={classes.header}>
        <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
          <Container>
            <Navbar.Brand href="onlinestore" className="p-1">
              Online Store
            </Navbar.Brand>
            <Nav className="ms-4">
              <NavItem className="p-2 ">
                {islogin && (
                  <Link
                    style={{ textDecoration: "none", color: "#f3f3f3" }}
                    to="/Home"
                  >
                    Home
                  </Link>
                )}
              </NavItem>
              {islogin && (
                <NavItem className="p-2 ">
                  <Link
                    style={{ textDecoration: "none", color: "#f3f3f3" }}
                    to="/Store"
                  >
                    Store
                  </Link>
                </NavItem>
              )}
              {islogin && (
                <NavItem className="p-2 ">
                  <Link
                    style={{ textDecoration: "none", color: "#f3f3f3" }}
                    to="/About"
                  >
                    About us
                  </Link>
                </NavItem>
              )}
              {islogin && (
                <NavItem className="p-2 ">
                  <Link
                    style={{ textDecoration: "none", color: "#f3f3f3" }}
                    to="/contact"
                  >
                    Contact us
                  </Link>
                </NavItem>
              )}
            </Nav>
            {islogin && <HeaderCartButton onShow={props.onShow} />}
            {!islogin && (
              <Link
                style={{ textDecoration: "none", color: "#f3f3f3" }}
                to="/authform"
              >
                Log In
              </Link>
            )}
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
};

export default Header;
