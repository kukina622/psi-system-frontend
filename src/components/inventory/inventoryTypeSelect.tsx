import { Form } from "react-bootstrap";
import { useContext } from "react";
import { inventoryContext } from "context/inventoryContext";
import { IinventoryInfo } from "types/inventory";

const InventoryTypeSelect = () => {
  const { inventoryInfoList, setShowInventoryType } =
    useContext(inventoryContext);
  const inventoryTypeList: string[] = inventoryInfoList.map(
    ({ inventory_type }: IinventoryInfo) => inventory_type
  );
  const inventoryTypeListNoRepeat: string[] = Array.from(
    new Set(inventoryTypeList)
  );

  function handleInventoryTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue: number = parseInt(e.target.value);
    if (selectedValue === -1) {
      return setShowInventoryType(null);
    }
    setShowInventoryType(inventoryTypeListNoRepeat[selectedValue]);
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
