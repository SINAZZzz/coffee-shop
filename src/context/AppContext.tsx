import React, { createContext, useState, useEffect } from "react";
import { AppContextProviderProps } from "../interfaces/AppContextProviderProps";
import { AppContextType } from "../interfaces/AppContextType";
import { get } from "../api/http";

export const AppContext = createContext<AppContextType>({
  categories:'',
  setCategories: () => {} ,
  products: '',
  setProducts: () => {},
  selectedChip: 0,
  setSelectedChip: () => {} ,
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [selectedChip, setSelectedChip] = useState<number | undefined>();
  const [categories, setCategories] = useState<string>();
  const [products, setProducts] = useState<string>();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData:string = await get('categories');
        const productsData:string = await get('products');
        setCategories(categoriesData)
        setProducts(productsData)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 
  
  return (
    <AppContext.Provider
      value={{
        categories:categories,
        setCategories,
        products:products,
        setProducts,
        selectedChip:selectedChip,
        setSelectedChip
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
