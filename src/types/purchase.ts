export interface IpurchaseInfo {
  purchase_type: string;
  purchase_name: string;
  purchase_price: number;
  purchase_quantity: number;
  purchase_time: string;
  purchase_manufacturer: string;
}

export interface IaddPurchaseInfo {
  purchase_type: string;
  purchase_name: string;
  purchase_price: number;
  purchase_quantity: number;
  purchase_time: Date;
  purchase_manufacturer: string;
}
