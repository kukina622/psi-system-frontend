import { createContext } from "react";
import { IpurchaseInfo } from "types/purchase";

interface IContextProps {
  multiPurchases: IpurchaseInfo[];
  setMultiPurchases: React.Dispatch<React.SetStateAction<IpurchaseInfo[]>>;
}

export const purchaseContext = createContext({} as IContextProps);
