import {
  Button,
  Card,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form
} from "react-bootstrap";

const PurchasePanel = () => {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title>進貨選單</Card.Title>
        <Card.Text className="mt-3 px-1">
          <Row className="gx-5">
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  貨品名稱
                </InputGroup.Text>
                <FormControl
                  required
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  貨品類型
                </InputGroup.Text>
                <FormControl
                  required
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  貨品單價
                </InputGroup.Text>
                <FormControl
                  required
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-4 gx-5">
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  進貨數量
                </InputGroup.Text>
                <FormControl
                  required
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  進貨時間
                </InputGroup.Text>
                <Form.Control type="date" />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  進貨廠商
                </InputGroup.Text>
                <FormControl
                  required
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
        </Card.Text>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="secondary me-2">加入批次清單</Button>
          <Button variant="primary">單個進貨</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PurchasePanel;
