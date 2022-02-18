import CustomerPanel from "components/customer/customerPanel";
import AddCustomerPanel from "components/customer/addCustomerPanel";
import { Tab, Row, Col, ListGroup, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { apiGetAllCustomer } from "api/customerApi";
import { IcustomerInfo } from "types/customer";

const Customer = () => {
  const [customerInfoList, setCustomerInfoList] = useState<IcustomerInfo[]>([]);
  useEffect(() => {
    async function fetchCustomerInfo() {
      const res = await apiGetAllCustomer();
      const fetchCustomerInfo: IcustomerInfo[] = res.data;
      setCustomerInfoList(fetchCustomerInfo);
    }
    fetchCustomerInfo();
  }, []);

  return (
    <Container className="mt-3">
      <Tab.Container defaultActiveKey="#add">
        <Row className="justify-content-center">
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item action href="#add">
                新增客戶
              </ListGroup.Item>
              {customerInfoList.map(
                ({ customer_id, customer_name }: IcustomerInfo, index) => (
                  <ListGroup.Item action href={`#${customer_id}`} key={index}>
                    {customer_name}
                  </ListGroup.Item>
                )
              )}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#add">
                <AddCustomerPanel />
              </Tab.Pane>
              {customerInfoList.map((customerInfo: IcustomerInfo, index) => (
                <Tab.Pane eventKey={`#${customerInfo.customer_id}`} key={index}>
                  <CustomerPanel customerInfo={customerInfo} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Customer;
