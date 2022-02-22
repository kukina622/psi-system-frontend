import axios from "./axios";
import { IsaleInfo } from "types/sale";

export const apiAddSaleList = (data: IsaleInfo[]) => axios.post("/sale", data);
