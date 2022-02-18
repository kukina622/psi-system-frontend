import { apiAddCustomer } from "api/customerApi";
import { customerContext } from "context/customerContext";
import { useState, useContext } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Col,
  Row,
  Card,
  Form
} from "react-bootstrap";
import { IaddCustomerInfo, IcustomerInfo } from "types/customer";

const AddCustomerPanel = () => {
  const [validated, setValidated] = useState(false);
  const [addCustomerInfo, setAddCustomerInfo] = useState<IaddCustomerInfo>({
    customer_name: ""
  });
  const {
    customer_name,
    tax_ID,
    contact_person,
    phone,
    fax_number,
    customer_email,
    customer_address
  } = addCustomerInfo;
  const { customerInfoList, setCustomerInfoList } = useContext(customerContext);
  function inputChangeHandle(prop: string, val: string): void {
    setAddCustomerInfo((prev) => {
      return {
        ...prev,
        [prop]: val
      };
    });
  }

  async function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    setValidated(true);
    try {
      const res = await apiAddCustomer(addCustomerInfo);
      const newCustomerInfo: IcustomerInfo = res.data;
      setCustomerInfoList([...customerInfoList, newCustomerInfo]);
      alert("新增成功");
      setAddCustomerInfo({ customer_name: "" });
      setValidated(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card>
      <Card.Header className="position-relative">
        <h2 className="text-center h3">新增客戶</h2>
      </Card.Header>
      <Card.Body>
        <Form validated={validated} onSubmit={submitHandle}>
          <Row className="flex-column">
            <Col md={6}>
              <InputGroup className="mt-1">
                <InputGroup.Text id="inputGroup-sizing-default">
                  客戶名稱
                </InputGroup.Text>
                <FormControl
                  required
                  aria-describedby="inputGroup-sizing-default"
                  value={customer_name}
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
                  value={tax_ID ? tax_ID : ""}
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
                  value={contact_person ? contact_person : ""}
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
                  value={phone ? phone : ""}
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
                  value={fax_number ? fax_number : ""}
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
                  value={customer_email ? customer_email : ""}
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
                  value={customer_address ? customer_address : ""}
                  onChange={(e) =>
                    inputChangeHandle("customer_address", e.target.value)
                  }
                />
              </InputGroup>
            </Col>
            <Col>
              <Button
                type="submit"
                variant="primary"
                className="w-100 me-1 mt-3"
              >
                確定新增
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddCustomerPanel;
