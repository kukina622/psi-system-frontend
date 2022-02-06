import axios from "./axios";
import { IaddCustomerInfo } from "types/customer";

export const apiGetAllCustomer = () => axios.get("/customer");

export const apiAddCustomer = (data: IaddCustomerInfo) =>
  axios.post("/customer", data);

export const apiUpdateCustomerById = (data: IaddCustomerInfo, id: number) =>
  axios.put(`/customer/${id}`, data);

export const apiDeleteCustomerById = (id: number) =>
  axios.delete(`/customer/${id}`);
