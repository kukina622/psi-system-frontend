import axios from "./axios";
import { IinventoryInfo } from "types/inventory";

export const apiGetAllInventory = () => axios.get("/inventory");

export const apiAddInventory = (data: IinventoryInfo) =>
  axios.post("/inventory", data);

export const apiUpdateInventoryById = (data: IinventoryInfo, id: number) =>
  axios.put(`/inventory/${id}`, data);

export const apiDeleteInventoryById = (id: number) =>
  axios.delete(`/inventory/${id}`);
