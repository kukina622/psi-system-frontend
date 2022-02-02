import { Form } from "react-bootstrap";
import { useContext } from "react";
import { inventoryContext } from "context/inventoryContext";
import { IinventoryInfo } from "types/inventory";

const InventoryTypeSelect = () => {
  const {
    inventoryInfoList,
    setShowInventoryCardList,
    generateShowInventoryCardList
  } = useContext(inventoryContext);
  const inventoryTypeList: string[] = inventoryInfoList.map(
    ({ inventory_type }: IinventoryInfo) => inventory_type
  );
  const inventoryTypeListNoRepeat: string[] = Array.from(
    new Set(inventoryTypeList)
  );

  function handleInventoryTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue: number = parseInt(e.target.value);
    let filterInventoryInfoList: IinventoryInfo[] = inventoryInfoList;
    if (selectedValue !== -1) {
      const selectedType: string = inventoryTypeListNoRepeat[selectedValue];
      filterInventoryInfoList = inventoryInfoList.filter(
        ({ inventory_type }: IinventoryInfo) => inventory_type === selectedType
      );
    }
    const _showInventoryCardList = generateShowInventoryCardList(
      filterInventoryInfoList
    );
    setShowInventoryCardList(_showInventoryCardList);
  }

  return (
    <Form.Select
      aria-label="Default select"
      className="mt-3"
      onChange={(e) => handleInventoryTypeChange(e)}
    >
      <option value="-1">選擇存貨類別</option>
      {inventoryTypeListNoRepeat.map((inventoryType: string, key) => {
        return (
          <option value={key} key={key}>
            {inventoryType}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default InventoryTypeSelect;
