import { createContext } from "react";
import { IinventoryInfo } from "types/inventory";

interface IContextProps {
  inventoryInfoList: IinventoryInfo[];
  setInventoryInfoList: (inventoryInfoList: IinventoryInfo[]) => void;
  showInventoryCardList: JSX.Element[];
  setShowInventoryCardList: (showInventoryCardList: JSX.Element[]) => void;
  generateShowInventoryCardList: (
    _inventoryInfoList: IinventoryInfo[]
  ) => JSX.Element[];
}

export const inventoryContext = createContext({} as IContextProps);
