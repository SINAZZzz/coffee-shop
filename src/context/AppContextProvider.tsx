import { useState } from "react";
import { AppContext } from "./AppContext";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const AppContextProvider = ({ children } : Props) => {
    const [selectedChip, setSelectedChip] = useState();
   

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