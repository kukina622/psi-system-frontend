import axios from "./axios";
import { IaddSaleInfo } from "types/sale";

export const apiAddSaleList = (data: IaddSaleInfo[]) =>
  axios.post("/sale", data);
