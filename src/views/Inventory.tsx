import { Container, Row, Col } from "react-bootstrap";
import InventoryCard from "components/inventory/inventoryCard";
import InventoryTypeSelect from "components/inventory/inventoryTypeSelect";
import { useEffect, useState } from "react";
import { apiGetAllInventory } from "api/inventoryApi";
import { IfetchInventoryInfo, IinventoryInfo } from "types/inventory";
import { inventoryContext } from "context/inventoryContext";

const Inventory = () => {
  const [inventoryInfoList, setInventoryInfoList] = useState(
    [] as IinventoryInfo[]
  );
  const [showInventoryType, setShowInventoryType] = useState<string | null>(
    null
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
      setInventoryInfoList(_inventoryInfoList);
    }
    fetchInventoryInfo();
  }, []);

  let showInventoryInfoList: IinventoryInfo[] = inventoryInfoList;
  if (showInventoryType !== null) {
    showInventoryInfoList = showInventoryInfoList.filter(
      ({ inventory_type }: IinventoryInfo) => {
        return inventory_type === showInventoryType;
      }
    );
  }

  return (
    <Container>
      <inventoryContext.Provider
        value={{
          inventoryInfoList,
          setInventoryInfoList,
          showInventoryType,
          setShowInventoryType
        }}
      >
        <Row>
          <Col md={3}>
            <InventoryTypeSelect />
          </Col>
        </Row>
        <Row>
          {showInventoryInfoList.map((inventoryInfo: IinventoryInfo, key) => {
            return (
              <Col md={3} className="mt-3" key={key}>
                <InventoryCard inventoryInfo={inventoryInfo} />
              </Col>
            );
          })}
        </Row>
      </inventoryContext.Provider>
    </Container>
  );
};

export default Inventory;
