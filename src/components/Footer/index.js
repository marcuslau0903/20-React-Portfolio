import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="p-3 justify-content-center">
        <Navbar.Brand href="/">Thans For Visiting!!</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
