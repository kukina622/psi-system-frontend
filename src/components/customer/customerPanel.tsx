import { useState } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Form,
  Col,
  Row,
  Card
} from "react-bootstrap";
import { IcustomerInfo } from "types/customer";

interface customerPanelProps {
  customerInfo: IcustomerInfo;
}

const CustomerPanel = ({ customerInfo }: customerPanelProps) => {
  const [editMode, setEditMode] = useState(false);
  const [_customerInfo, setCustomerInfo] = useState(customerInfo);
  const {
    customer_id,
    customer_name,
    tax_ID,
    contact_person,
    phone,
    fax_number,
    customer_email,
    customer_address
  } = _customerInfo;
  return (
    <Card>
      <Card.Header className="position-relative">
        <h2 className="text-center h3">客戶檢視</h2>
        <Form.Check
          type="switch"
          label={editMode ? "編輯" : "檢視"}
          checked={editMode}
          className="position-absolute top-50 end-0"
          style={{ transform: "translate(-20%, -50%)" }}
          onChange={() => setEditMode((prev) => !prev)}
        />
      </Card.Header>
      <Card.Body>
        <Row className="flex-column">
          <Col md={4}>
            <InputGroup>
              <InputGroup.Text id="inputGroup-sizing-default">
                客戶編號
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={true}
                defaultValue={customer_id}
              />
            </InputGroup>
          </Col>
          <Col md={8}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                客戶名稱
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
                defaultValue={customer_name}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                統一編號
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
                defaultValue={tax_ID}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                {"\u2002"}聯絡人{"\u2002"}
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
                defaultValue={contact_person}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                電話號碼
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
                defaultValue={phone}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                傳真號碼
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
                defaultValue={fax_number}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                電子郵件
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
                defaultValue={customer_email}
              />
            </InputGroup>
          </Col>
          <Col md={10}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                客戶地址
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
                defaultValue={customer_address}
              />
            </InputGroup>
          </Col>
          <Col>
            <Button
              variant="primary"
              className="w-100 me-1 mt-3"
              disabled={!editMode}
            >
              修改
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CustomerPanel;
