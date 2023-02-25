import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar className="p-1 " bg="primary" variant="light">
      <Container>
        <Navbar.Brand>
          <h3>The Generics</h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
