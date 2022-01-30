import axios from "./axios";

interface IinventoryInfo {
  inventory_type: string;
  inventory_name: string;
  purchase_price: number;
  inventory_quantity: number;
  purchase_time: Date;
}

export const apiGetAllInventory = () => axios.get("/inventory");

export const apiAddInventory = (data: IinventoryInfo) =>
  axios.post("/inventory", data);

export const apiUpdateInventoryById = (data: IinventoryInfo, id: number) =>
  axios.put(`/inventory/${id}`, data);

export const apiDeleteInventoryById = (id: number) =>
  axios.delete(`/inventory/${id}`);
