import { Container } from "react-bootstrap";
import PurchasePanel from "components/purchase/purchasePanel";
import PurchaseTable from "components/purchase/purchaseTable";

const Purchase = () => {
  return (
    <Container>
      <PurchasePanel />
      <PurchaseTable />
    </Container>
  );
};

export default Purchase;
