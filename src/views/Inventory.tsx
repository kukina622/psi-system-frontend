import { Container, Form, Row, Col } from "react-bootstrap";
import InventoryCard from "components/inventory/inventoryCard";

const Inventory = () => {
  const testData = Array.from({ length: 5 }).map((_, index) => {
    return {
      type: "測試類別",
      name: "test",
      purchase_price: index,
      quantity: 20,
      purchase_time: new Date(2021, 0, 13)
    };
  });
  let inventoryCardList = [];
  for (let i = 0; i < testData.length; i++) {
    inventoryCardList.push(
      <Col md={3} className="mt-3" key={i}>
        <InventoryCard inventoryInfo={testData[i]} />
      </Col>
    );
  }
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Form.Select aria-label="Default select example" className="mt-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>{inventoryCardList}</Row>
    </Container>
  );
};

export default Inventory;
