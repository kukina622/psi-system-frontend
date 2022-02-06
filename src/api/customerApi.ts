import axios from "./axios";
import { IcustomerInfo } from "types/customer";

export const apiGetAllCustomer = () => axios.get("/customer");

export const apiAddCustomer = (data: IcustomerInfo) =>
  axios.post("/customer", data);

export const apiUpdateCustomerById = (data: IcustomerInfo, id: number) =>
  axios.put(`/customer/${id}`, data);

export const apiDeleteCustomerById = (id: number) =>
  axios.delete(`/customer/${id}`);
