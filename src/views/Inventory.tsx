import { Container, Form, Row, Col } from "react-bootstrap";
import InventoryCard from "components/inventory/inventoryCard";
import { useEffect, useState } from "react";
import { apiGetAllInventory } from "api/inventoryApi";
import { IfetchInventoryInfo, IinventoryInfo } from "types/inventory";

const Inventory = () => {
  const [inventoryInfoList, setInventoryInfoList] = useState(
    [] as IinventoryInfo[]
  );
  const [showInventoryCardList, setShowInventoryCardList] = useState(
    [] as JSX.Element[]
  );
  useEffect(() => {
    async function fetchInventoryInfo() {
      const { data } = await apiGetAllInventory();
      const _inventoryInfoList: IinventoryInfo[] = data.map(
        (inventoryInfo: IfetchInventoryInfo) => {
          return {
            ...inventoryInfo,
            purchase_time: new Date(inventoryInfo.purchase_time),
          };
        }
      );
      const _showInventoryCardList: JSX.Element[] = _inventoryInfoList.map(
        (inventoryInfo: IinventoryInfo, key) => {
          return (
            <Col md={3} className="mt-3" key={key}>
              <InventoryCard inventoryInfo={inventoryInfo} />
            </Col>
          );
        }
      );
      setInventoryInfoList(_inventoryInfoList);
      setShowInventoryCardList(_showInventoryCardList);
    }
    fetchInventoryInfo();
  }, []);
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
      <Row>{showInventoryCardList}</Row>
    </Container>
  );
};

export default Inventory;
