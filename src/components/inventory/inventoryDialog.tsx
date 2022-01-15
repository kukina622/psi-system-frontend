import { useState } from "react";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { formatDate } from "utils/date";
import { IinventoryInfo } from "./types";

interface InventoryDialogProps {
  inventoryInfo: IinventoryInfo;
  show: boolean;
  setShow: (show: boolean) => void;
  editMode: boolean;
  setEditMode: (editMode: boolean | ((prev: boolean) => boolean)) => void;
}

const InventoryDialog = ({
  inventoryInfo,
  show,
  setShow,
  editMode,
  setEditMode
}: InventoryDialogProps) => {
  const [_inventoryInfo, setInventoryInfo] = useState(inventoryInfo);
  const { type, name, purchase_price, quantity, purchase_time } =
    _inventoryInfo;
  function inputChangeHandle(prop: string, value: string | number) {
    let _value: string | number | Date = value;
    switch (prop) {
      case "purchase_price":
      case "quantity":
        _value = parseInt(value as string);
        break;
      case "purchase_time":
        _value = new Date(value as string);
        break;
    }
    setInventoryInfo((prev) => {
      return {
        ...prev,
        [prop]: _value
      };
    });
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>存貨檢視</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Check
          type="switch"
          label={editMode ? "編輯" : "檢視"}
          checked={editMode}
          onChange={() => setEditMode((prev) => !prev)}
        />
        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            存貨名稱
          </InputGroup.Text>
          <FormControl
            aria-describedby="inputGroup-sizing-default"
            readOnly={!editMode}
            defaultValue={name}
            onChange={(e) => {
              inputChangeHandle("name", e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            存貨類別
          </InputGroup.Text>
          <FormControl
            aria-describedby="inputGroup-sizing-default"
            readOnly={!editMode}
            defaultValue={type}
            onChange={(e) => {
              inputChangeHandle("type", e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            購買價格
          </InputGroup.Text>
          <FormControl
            aria-describedby="inputGroup-sizing-default"
            readOnly={!editMode}
            defaultValue={purchase_price}
            onChange={(e) => {
              inputChangeHandle("purchase_price", e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            庫存數量
          </InputGroup.Text>
          <FormControl
            aria-describedby="inputGroup-sizing-default"
            readOnly={!editMode}
            defaultValue={quantity}
            onChange={(e) => {
              inputChangeHandle("quantity", e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-default">
            購買時間
          </InputGroup.Text>
          <Form.Control
            type="date"
            readOnly={!editMode}
            defaultValue={formatDate(purchase_time)}
            onChange={(e) => {
              inputChangeHandle("purchase_time", e.target.value);
            }}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InventoryDialog;
