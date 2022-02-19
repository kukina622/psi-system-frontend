export interface IinventoryInfo {
  inventory_id: number;
  inventory_type: string;
  inventory_name: string;
  purchase_price: number;
  inventory_quantity: number;
  purchase_time: Date;
  purchase_manufacturer: string;
}

export interface IfetchInventoryInfo {
  inventory_id: number;
  inventory_type: string;
  inventory_name: string;
  purchase_price: number;
  inventory_quantity: number;
  purchase_time: string;
  purchase_manufacturer: string;
}
