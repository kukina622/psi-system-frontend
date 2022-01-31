import { Container, Form, Row, Col } from "react-bootstrap";
import InventoryCard from "components/inventory/inventoryCard";
import { useEffect, useState } from "react";
import { apiGetAllInventory } from "api/inventoryApi";

const Inventory = () => {
  const [inventoryInfo, setInventoryInfo] = useState([]);
  useEffect(() => {
    async function fetchInventoryInfo() {
      interface IfetchInventoryInfo {
        inventory_type: string;
        inventory_name: string;
        purchase_price: number;
        inventory_quantity: number;
        purchase_time: string;
      }
      const { data } = await apiGetAllInventory();
      setInventoryInfo(
        data.map((x: IfetchInventoryInfo) => {
          return { ...x, purchase_time: new Date(x.purchase_time) };
        })
      );
    }
    fetchInventoryInfo();
  }, []);
  let inventoryCardList = [];
  for (let i = 0; i < inventoryInfo.length; i++) {
    inventoryCardList.push(
      <Col md={3} className="mt-3" key={i}>
        <InventoryCard inventoryInfo={inventoryInfo[i]} />
      </Col>
    );
  }
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Form.Select aria-label="Default select example" className="mt-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>{inventoryCardList}</Row>
    </Container>
  );
};

export default Inventory;
