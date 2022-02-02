import { Container, Row, Col } from "react-bootstrap";
import InventoryCard from "components/inventory/inventoryCard";
import InventoryTypeSelect from "components/inventory/inventoryTypeSelect";
import { useEffect, useState } from "react";
import { apiGetAllInventory } from "api/inventoryApi";
import { IfetchInventoryInfo, IinventoryInfo } from "types/inventory";
import { inventoryContext } from "context/inventoryContext";

function generateShowInventoryCardList(
  _inventoryInfoList: IinventoryInfo[]
): JSX.Element[] {
  return _inventoryInfoList.map((inventoryInfo: IinventoryInfo, key) => {
    return (
      <Col md={3} className="mt-3" key={key}>
        <InventoryCard inventoryInfo={inventoryInfo} />
      </Col>
    );
  });
}

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
            purchase_time: new Date(inventoryInfo.purchase_time)
          };
        }
      );
      const _showInventoryCardList: JSX.Element[] =
        generateShowInventoryCardList(_inventoryInfoList);
      setInventoryInfoList(_inventoryInfoList);
      setShowInventoryCardList(_showInventoryCardList);
    }
    fetchInventoryInfo();
  }, []);
  return (
    <Container>
      <inventoryContext.Provider
        value={{
          inventoryInfoList,
          setInventoryInfoList,
          showInventoryCardList,
          setShowInventoryCardList,
          generateShowInventoryCardList
        }}
      >
        <Row>
          <Col md={3}>
            <InventoryTypeSelect />
          </Col>
        </Row>
        <Row>{showInventoryCardList}</Row>
      </inventoryContext.Provider>
    </Container>
  );
};

export default Inventory;
