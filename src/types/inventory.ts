export interface IinventoryInfo {
  inventory_id: number;
  inventory_type: string;
  inventory_name: string;
  purchase_price: number;
  inventory_quantity: number;
  purchase_time: Date;
}

export interface IfetchInventoryInfo {
  inventory_id: number;
  inventory_type: string;
  inventory_name: string;
  purchase_price: number;
  inventory_quantity: number;
  purchase_time: string;
}
