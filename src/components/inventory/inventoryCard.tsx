import { Card, Button } from "react-bootstrap";
import { formatDate } from "utils/date";
import { IinventoryInfo } from "types/inventory";
import InventoryDialog from "components/inventory/inventoryDialog";
import { useState } from "react";

interface inventoryCardProps {
  inventoryInfo: IinventoryInfo;
}

const InventoryCard = ({ inventoryInfo }: inventoryCardProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <Card onClick={() => setShowDialog(true)}>
        <Card.Body>
          <Card.Title>{inventoryInfo.inventory_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {inventoryInfo.inventory_type}
          </Card.Subtitle>
          <Card.Text>
            <span>購買價格：{inventoryInfo.purchase_price}</span>
            <br />
            <span>庫存數量：{inventoryInfo.inventory_quantity}</span>
            <br />
            <span>購買時間：{formatDate(inventoryInfo.purchase_time)} </span>
            <br />
            <span>購買廠商：{inventoryInfo.purchase_manufacturer} </span>
            <br />
            <Button
              variant="primary"
              className="mt-1"
              onClick={() => {
                setEditMode(true);
                setShowDialog(true);
              }}
            >
              編輯
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <InventoryDialog
        inventoryInfo={inventoryInfo}
        show={showDialog}
        setShow={setShowDialog}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </>
  );
};

export default InventoryCard;
