import React, { createContext, useState } from "react";
import { AppContextProviderProps } from "../interfaces/AppContextProviderProps";
import { AppContextType } from "../interfaces/AppContextType";



export const AppContext = createContext<AppContextType>({
  selectedChip: undefined,
  setSelectedChip: () => {},
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [selectedChip, setSelectedChip] = useState<number | undefined>();

  return (
    <AppContext.Provider
      value={{
        selectedChip: selectedChip,
        setSelectedChip,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
