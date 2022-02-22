import { purchaseContext } from "context/purchaseContext";
import { useContext } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { IpurchaseInfo, IaddPurchaseInfo } from "types/purchase";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { apiAddPurchaseList } from "api/purchaseApi";

const PurchaseTable = () => {
  const { multiPurchases, setMultiPurchases } = useContext(purchaseContext);
  function deletePurchaseByIndex(index: number) {
    const newMultiPurchases: IpurchaseInfo[] = [...multiPurchases];
    newMultiPurchases.splice(index, 1);
    setMultiPurchases(newMultiPurchases);
  }

  async function addSinglePurchaseByIndex(index: number) {
    try {
      const _purchaseInfo: IaddPurchaseInfo = JSON.parse(
        JSON.stringify(multiPurchases[index])
      );
      _purchaseInfo.purchase_time = new Date(_purchaseInfo.purchase_time);
      await apiAddPurchaseList([_purchaseInfo]);
      alert("送出成功");
      deletePurchaseByIndex(index);
    } catch (err) {
      console.log(err);
    }
  }

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
            {multiPurchases.map(
              (
                {
                  purchase_name,
                  purchase_type,
                  purchase_price,
                  purchase_quantity,
                  purchase_time,
                  purchase_manufacturer
                }: IpurchaseInfo,
                index
              ) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{purchase_name}</td>
                    <td>{purchase_type}</td>
                    <td>{purchase_price}</td>
                    <td>{purchase_quantity}</td>
                    <td>{purchase_time}</td>
                    <td>{purchase_manufacturer}</td>
                    <td style={{ width: "7rem" }}>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="me-2"
                        onClick={() => addSinglePurchaseByIndex(index)}
                      >
                        <FaCheck />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => deletePurchaseByIndex(index)}
                      >
                        <ImCross />
                      </Button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PurchaseTable;
