import CustomerPanel from "components/customer/customerPanel";
import { Tab, Row, Col, ListGroup, Container } from "react-bootstrap";

const Customer = () => {
  return (
    <Container className="mt-3">
      <Tab.Container defaultActiveKey="#link1">
        <Row className="justify-content-center">
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item action href="#add">
                新增客戶
              </ListGroup.Item>
              <ListGroup.Item action href="#link1">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#add">新增客戶</Tab.Pane>
              <Tab.Pane eventKey="#link1">
                <CustomerPanel />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Customer;
