import { Container } from "react-bootstrap";
import PurchasePanel from "components/purchase/purchasePanel";
import PurchaseTable from "components/purchase/purchaseTable";
import { useState } from "react";
import { IpurchaseInfo } from "types/purchase";
import { purchaseContext } from "context/purchaseContext";

const Purchase = () => {
  const [multiPurchases, setMultiPurchases] = useState<IpurchaseInfo[]>([]);
  return (
    <Container>
      <purchaseContext.Provider value={{ multiPurchases, setMultiPurchases }}>
        <PurchasePanel />
        <PurchaseTable />
      </purchaseContext.Provider>
    </Container>
  );
};

export default Purchase;
