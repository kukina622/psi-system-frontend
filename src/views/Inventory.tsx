import { Container, Form, Row, Col } from "react-bootstrap";

const Inventory = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Form.Select aria-label="Default select example" className="mt-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default Inventory;
