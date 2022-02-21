import axios from "./axios";
import { IaddPurchaseInfo } from "types/purchase";

export const apiAddPurchaseList = (data: IaddPurchaseInfo[]) =>
  axios.post("/purchase", data);
