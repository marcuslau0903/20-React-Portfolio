import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="fw-bold">
        <Navbar.Brand className="fs-3" href="/">
          Marcus Lau
        </Navbar.Brand>
        <Nav className="me-auto fs-5">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/contact-me" className="nav-link fs-5">
            Contact Me
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
