import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Marcus Lau</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/contact-me" className="nav-link">
            Contact Me
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
