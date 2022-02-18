import CustomerPanel from "components/customer/customerPanel";
import AddCustomerPanel from "components/customer/addCustomerPanel";
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
              <Tab.Pane eventKey="#add">
                <AddCustomerPanel />
              </Tab.Pane>
              <Tab.Pane eventKey="#link1">
                <CustomerPanel
                  customerInfo={{
                    customer_id: 1,
                    customer_name: "xxx文具行",
                    customer_address: "斗六市大學路3段123號"
                  }}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Customer;
