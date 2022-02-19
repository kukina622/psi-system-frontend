import { apiUpdateCustomerById } from "api/customerApi";
import { customerContext } from "context/customerContext";
import { useState, useContext, useEffect } from "react";
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
  const { setCustomerInfoList } = useContext(customerContext);
  // prop update
  useEffect(() => {
    setCustomerInfo(customerInfo);
  }, [customerInfo]);

  function inputChangeHandle(prop: string, value: string) {
    setCustomerInfo((prev) => {
      return {
        ...prev,
        [prop]: value
      };
    });
  }

  async function updateCustomer() {
    const { customer_id } = _customerInfo;
    try {
      await apiUpdateCustomerById(_customerInfo, customer_id);
      setCustomerInfoList((prev: IcustomerInfo[]) => {
        const next = [...prev];
        const index = prev.findIndex(
          (customerInfo: IcustomerInfo) =>
            customerInfo.customer_id === customer_id
        );
        next[index] = _customerInfo;
        return next;
      });
      alert("更新成功");
    } catch (err) {
      console.log(err);
    }
  }
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
          <Col md={6}>
            <InputGroup className="mt-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                客戶名稱
              </InputGroup.Text>
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                readOnly={!editMode}
                defaultValue={customer_name}
                onChange={(e) =>
                  inputChangeHandle("customer_name", e.target.value)
                }
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
                onChange={(e) => inputChangeHandle("tax_ID", e.target.value)}
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
                onChange={(e) =>
                  inputChangeHandle("contact_person", e.target.value)
                }
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
                onChange={(e) => inputChangeHandle("phone", e.target.value)}
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
                onChange={(e) =>
                  inputChangeHandle("fax_number", e.target.value)
                }
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
                onChange={(e) =>
                  inputChangeHandle("customer_email", e.target.value)
                }
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
                onChange={(e) =>
                  inputChangeHandle("customer_address", e.target.value)
                }
              />
            </InputGroup>
          </Col>
          <Col>
            <Button
              variant="primary"
              className="w-100 me-1 mt-3"
              disabled={!editMode}
              onClick={updateCustomer}
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
