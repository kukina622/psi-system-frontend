import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          PSI System
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            存貨管理
          </Nav.Link>
          <Nav.Link as={Link} to="customer">
            顧客管理
          </Nav.Link>
          <Nav.Link as={Link} to="purchase">
            進貨
          </Nav.Link>
          <Nav.Link as={Link} to="sale">
            出貨
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigator;
