import { Button, Card, Table } from "react-bootstrap";

const PurchaseTable = () => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-end">
          <Button>批量出貨</Button>
        </div>
        <Table striped bordered hover className="mt-1">
          <thead>
            <tr>
              <th>#</th>
              <th>貨品名稱</th>
              <th>貨品類型</th>
              <th>貨品單價</th>
              <th>進貨數量</th>
              <th>進貨時間</th>
              <th>進貨廠商</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PurchaseTable;
