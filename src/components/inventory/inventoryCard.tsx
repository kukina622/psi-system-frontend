import { Card, Button } from "react-bootstrap";
import { formatDate } from "utils/date";
import { IinventoryInfo } from "./types";
import InventoryDialog from "components/inventory/inventoryDialog";
import { useState } from "react";

interface inventoryCardProps {
  inventoryInfo: IinventoryInfo;
}

const InventoryCard = ({ inventoryInfo }: inventoryCardProps) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{inventoryInfo.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {inventoryInfo.type}
          </Card.Subtitle>
          <Card.Text>
            <span>購買價格：{inventoryInfo.purchase_price}</span>
            <br />
            <span>庫存數量：{inventoryInfo.quantity}</span>
            <br />
            <span>購買時間：{formatDate(inventoryInfo.purchase_time)} </span>
            <br />
            <Button
              variant="primary"
              className="mt-1"
              onClick={() => setShowDialog(true)}
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
      />
    </>
  );
};

export default InventoryCard;
