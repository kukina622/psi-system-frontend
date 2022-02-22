import { apiGetAllInventory } from "api/inventoryApi";
import { apiGetAllCustomer } from "api/customerApi";
import { useEffect, useState, useRef } from "react";
import { IinventoryInfo, IfetchInventoryInfo } from "types/inventory";
import { IcustomerInfo } from "types/customer";
import { IsaleInfo, IaddSaleInfo } from "types/sale";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  Card,
  Form,
  Row,
  Col,
  Button,
  FormControl
} from "react-bootstrap";
import { apiAddSaleList } from "api/saleApi";

const SalePanel = () => {
  const [inventoryInfoList, setInventoryInfoList] = useState<IinventoryInfo[]>(
    []
  );
  const [customerList, setCustomerList] = useState<IcustomerInfo[]>([]);
  useEffect(() => {
    async function fetchApi() {
      try {
        const [inventoryRes, customerRes] = await Promise.all([
          apiGetAllInventory(),
          apiGetAllCustomer()
        ]);
        const inventoryData: IinventoryInfo[] = inventoryRes.data.map(
          (inventory: IfetchInventoryInfo) => {
            return {
              ...inventory,
              purchase_time: new Date(inventory.purchase_time)
            };
          }
        );
        const customerData: IcustomerInfo[] = customerRes.data;
        setInventoryInfoList(inventoryData);
        setCustomerList(customerData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchApi();
  }, []);
  const formRef = useRef<HTMLFormElement>(null);
  const [saleInfo, setSaleInfo] = useState<IsaleInfo>({} as IsaleInfo);

  const { sale_price, sale_quantity, sale_time } = saleInfo;
  function handelInventorySelect(eventkey: string | null) {
    if (eventkey === null) return;
    setSaleInfo({ ...saleInfo, from_inventory: parseInt(eventkey) });
  }
  function handelCustomerSelect(eventkey: string | null) {
    if (eventkey === null) return;
    setSaleInfo({ ...saleInfo, to_customer: parseInt(eventkey) });
  }
  function findNameById(type: "customer" | "inventory", id: number) {
    switch (type) {
      case "customer":
        return customerList.find(
          (customer: IcustomerInfo) => customer.customer_id === id
        )?.customer_name;
      case "inventory":
        return inventoryInfoList.find(
          (inventoryInfo: IinventoryInfo) => inventoryInfo.inventory_id === id
        )?.inventory_name;
      default:
        return undefined;
    }
  }
  function inputChangeHandle(prop: string, value: string) {
    let _value: string | number = value;
    switch (prop) {
      case "sale_price":
      case "sale_quantity":
        _value = parseInt(_value) || 0;
        break;
    }
    setSaleInfo({ ...saleInfo, [prop]: value });
  }
  async function addSale() {
    if (formRef.current && formRef.current.checkValidity()) {
      try {
        const _saleInfo: IaddSaleInfo = JSON.parse(JSON.stringify(saleInfo));
        _saleInfo.sale_time = new Date(saleInfo.sale_time);
        await apiAddSaleList([_saleInfo]);
        alert("送出成功");
        setSaleInfo({} as IsaleInfo);
        formRef.current.reset();
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title>出貨選單</Card.Title>
        <Form ref={formRef}>
          <Row className="gx-5 mt-3 px-1">
            <Col md={6}>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="secondary"
                  title="出貨品項"
                  id="input-group-dropdown-1"
                  onSelect={handelInventorySelect}
                >
                  {inventoryInfoList.map(
                    (
                      {
                        inventory_id,
                        inventory_name,
                        inventory_quantity
                      }: IinventoryInfo,
                      index
                    ) => {
                      return (
                        <Dropdown.Item eventKey={inventory_id} key={index}>
                          {`${inventory_name}-剩餘數量${inventory_quantity}`}
                        </Dropdown.Item>
                      );
                    }
                  )}
                </DropdownButton>
                <FormControl
                  readOnly
                  required
                  aria-label="Text input with dropdown button"
                  value={
                    findNameById("inventory", saleInfo.from_inventory) || ""
                  }
                />
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="secondary"
                  title="客戶名稱"
                  id="input-group-dropdown-1"
                  onSelect={handelCustomerSelect}
                >
                  {customerList.map(
                    ({ customer_id, customer_name }: IcustomerInfo, index) => {
                      return (
                        <Dropdown.Item eventKey={customer_id} key={index}>
                          {customer_name}
                        </Dropdown.Item>
                      );
                    }
                  )}
                </DropdownButton>
                <FormControl
                  required
                  readOnly
                  aria-label="Text input with dropdown button"
                  value={findNameById("customer", saleInfo.to_customer) || ""}
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="mt-2 gx-5 px-1">
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  出貨價格
                </InputGroup.Text>
                <FormControl
                  required
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={sale_price}
                  onChange={(e) =>
                    inputChangeHandle("sale_price", e.target.value)
                  }
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  出貨數量
                </InputGroup.Text>
                <FormControl
                  required
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={sale_quantity}
                  onChange={(e) =>
                    inputChangeHandle("sale_quantity", e.target.value)
                  }
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text id="inputGroup-sizing-default">
                  出貨時間
                </InputGroup.Text>
                <Form.Control
                  required
                  type="date"
                  defaultValue={sale_time}
                  onChange={(e) =>
                    inputChangeHandle("sale_time", e.target.value)
                  }
                />
              </InputGroup>
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary me-2">加入批次清單</Button>
            <Button variant="primary" onClick={addSale}>
              單個出貨
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SalePanel;
