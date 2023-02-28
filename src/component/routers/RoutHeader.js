import { Container, Nav, Navbar, NavItem, NavLink } from "react-bootstrap";

const RouteHeader = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      className="justify-content-center"
    >
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
      </Container>
    </Navbar>
  );
};

export default RouteHeader;
