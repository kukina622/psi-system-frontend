import { createContext } from "react";
import { IinventoryInfo } from "types/inventory";

interface IContextProps {
  inventoryInfoList: IinventoryInfo[];
  setInventoryInfoList: React.Dispatch<React.SetStateAction<IinventoryInfo[]>>;
  showInventoryType: string | null;
  setShowInventoryType: React.Dispatch<React.SetStateAction<string | null>>;
}

export const inventoryContext = createContext({} as IContextProps);
