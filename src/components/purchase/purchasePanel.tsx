import { useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form
} from "react-bootstrap";
import { IpurchaseInfo } from "types/purchase";

const PurchasePanel = () => {
  const [purchaseInfo, setPurchaseInfo] = useState<IpurchaseInfo>(
    {} as IpurchaseInfo
  );
  const {
    purchase_type,
    purchase_name,
    purchase_price,
    purchase_quantity,
    purchase_time,
    purchase_manufacturer
  } = purchaseInfo;

  function inputChangeHandle(prop: string, value: string) {
    let _value: number | string = value;
    switch (prop) {
      case "purchase_price":
      case "purchase_quantity":
        _value = parseInt(value);
        break;
    }
    setPurchaseInfo((prev) => {
      return {
        ...prev,
        [prop]: _value
      };
    });
  }
  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title>進貨選單</Card.Title>
        <Row className="gx-5 mt-3 px-1">
          <Col md={4}>
            <InputGroup>
              <InputGroup.Text id="inputGroup-sizing-default">
                貨品名稱
              </InputGroup.Text>
              <FormControl
                required
                aria-describedby="inputGroup-sizing-default"
                defaultValue={purchase_name}
                onChange={(e) =>
                  inputChangeHandle("purchase_name", e.target.value)
                }
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
                defaultValue={purchase_type}
                onChange={(e) =>
                  inputChangeHandle("purchase_type", e.target.value)
                }
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
                defaultValue={purchase_price}
                onChange={(e) =>
                  inputChangeHandle("purchase_price", e.target.value)
                }
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mt-4 gx-5 px-1">
          <Col md={4}>
            <InputGroup>
              <InputGroup.Text id="inputGroup-sizing-default">
                進貨數量
              </InputGroup.Text>
              <FormControl
                required
                aria-describedby="inputGroup-sizing-default"
                defaultValue={purchase_quantity}
                onChange={(e) =>
                  inputChangeHandle("purchase_quantity", e.target.value)
                }
              />
            </InputGroup>
          </Col>
          <Col md={4}>
            <InputGroup>
              <InputGroup.Text id="inputGroup-sizing-default">
                進貨時間
              </InputGroup.Text>
              <Form.Control
                type="date"
                defaultValue={purchase_time}
                onChange={(e) => {
                  inputChangeHandle("purchase_time", e.target.value);
                }}
              />
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
                defaultValue={purchase_manufacturer}
                onChange={(e) => {
                  inputChangeHandle("purchase_manufacturer", e.target.value);
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="secondary me-2">加入批次清單</Button>
          <Button variant="primary">單個進貨</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PurchasePanel;
