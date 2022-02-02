import { Form } from "react-bootstrap";

const InventoryTypeSelect = () => {
  return (
    <Form.Select aria-label="Default select" className="mt-3">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
};

export default InventoryTypeSelect;
