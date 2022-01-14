import { useState } from "react";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { IinventoryInfo } from "./types";

interface InventoryDialogProps {
  inventoryInfo: IinventoryInfo;
  show: boolean;
  setShow: (show: boolean) => void;
}

const InventoryDialog = () => {
  const [switchMode, setSwitchMode] = useState(false);
  return (
    <Modal show={true}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Check
          type="switch"
          label={switchMode ? "編輯" : "檢視"}
          checked={switchMode}
          onChange={() => setSwitchMode((prev) => !prev)}
        />
        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            存貨名稱
          </InputGroup.Text>
          <FormControl
            aria-describedby="inputGroup-sizing-default"
            readOnly={!switchMode}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            存貨類別
          </InputGroup.Text>
          <FormControl
            aria-describedby="inputGroup-sizing-default"
            readOnly={!switchMode}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            購買價格
          </InputGroup.Text>
          <FormControl
            aria-describedby="inputGroup-sizing-default"
            readOnly={!switchMode}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            庫存數量
          </InputGroup.Text>
          <FormControl
            aria-describedby="inputGroup-sizing-default"
            readOnly={!switchMode}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-default">
            購買時間
          </InputGroup.Text>
          <Form.Control type="date" readOnly={!switchMode} />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InventoryDialog;
