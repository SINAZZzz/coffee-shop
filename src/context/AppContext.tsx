import React, { createContext, useState, useEffect } from "react";
import { AppContextProviderProps } from "../interfaces/AppContextProviderProps";
import { AppContextType } from "../interfaces/AppContextType";
import { get } from '../api';

export const AppContext = createContext<AppContextType>({
  dataIntro: '',
  setDataIntro: () => {} ,
  categories:'',
  setCategories: () => {} ,
  products: '',
  setProducts: () => {},
  selectedChip: 0,
  setSelectedChip: () => {} ,
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [selectedChip, setSelectedChip] = useState<number | undefined>();
  const [dataIntro, setDataIntro] = useState<string>();
  const [categories, setCategories] = useState<string>();
  const [products, setProducts] = useState<string>();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const introData = await get('intro');
        const categoriesData = await get('categories');
        const productsData = await get('products');
        setDataIntro(introData[0]);
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
        dataIntro: dataIntro,
        setDataIntro,
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
