import { Card } from "react-bootstrap";
import { formatDate } from "utils/date";

interface IinventoryInfo {
  type: string;
  name: string;
  purchase_price: number;
  quantity: number;
  purchase_time: Date;
}

interface inventoryCardProps {
  inventoryInfo: IinventoryInfo;
}

const InventoryCard = ({ inventoryInfo }: inventoryCardProps) => {
  return (
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
          <button className="btn btn-primary mt-1">編輯</button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InventoryCard;
