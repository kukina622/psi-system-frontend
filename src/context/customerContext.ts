import { createContext } from "react";
import { IcustomerInfo } from "types/customer";

interface IContextProps {
  customerInfoList: IcustomerInfo[];
  setCustomerInfoList: React.Dispatch<React.SetStateAction<IcustomerInfo[]>>;
}

export const customerContext = createContext({} as IContextProps);
