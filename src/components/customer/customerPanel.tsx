import { useState } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Form,
  Col,
  Row
} from "react-bootstrap";

const CustomerPanel = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <Row>
        <div className="position-relative mb-2">
          <h2 className="text-center">客戶檢視</h2>
          <Form.Check
            type="switch"
            label={editMode ? "編輯" : "檢視"}
            checked={editMode}
            className="position-absolute top-50 end-0"
            style={{ transform: "translate(-20%, -50%)" }}
            onChange={() => setEditMode((prev) => !prev)}
          />
        </div>
        <Col md={4}>
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-default">
              客戶編號
            </InputGroup.Text>
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              readOnly={!editMode}
            />
          </InputGroup>
        </Col>
        <Col md={8}>
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-default">
              客戶名稱
            </InputGroup.Text>
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              readOnly={!editMode}
            />
          </InputGroup>
        </Col>
        <Row>
          <Col md={6}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                統一編號
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                聯絡人
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
              />
            </InputGroup>
          </Col>
        </Row>
        <Col md={12}>
          <InputGroup className="mt-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              電話號碼
            </InputGroup.Text>
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              readOnly={!editMode}
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
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mt-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Email
            </InputGroup.Text>
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              readOnly={!editMode}
            />
          </InputGroup>
        </Col>
        <Col md={12}>
          <InputGroup className="mt-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              客戶地址
            </InputGroup.Text>
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              readOnly={!editMode}
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
    </>
  );
};

export default CustomerPanel;
