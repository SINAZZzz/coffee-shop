import React, { createContext, useState, useEffect, useMemo } from "react";
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
  productId: 0,
  setProductId: () => {} ,
}); 

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [selectedChip, setSelectedChip] = useState<number | undefined>();
  const [categories, setCategories] = useState<string>();
  const [products, setProducts] = useState<string>();
  const [productId , setProductId] = useState<number>();
  
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

  const memoizedProductId = useMemo(() => productId, [productId]);
  
  return (
    <AppContext.Provider
      value={{
        categories:categories,
        setCategories,
        products:products,
        setProducts,
        selectedChip:selectedChip,
        setSelectedChip,
        productId:memoizedProductId,
        setProductId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
