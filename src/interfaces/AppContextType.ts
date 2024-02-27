type Category = {
    id: number;
    name: string;
  };
  
export interface AppContextType {
    dataIntro: string | undefined;
    setDataIntro: React.Dispatch<React.SetStateAction<string | undefined>>;
    categories: Category[]; 
    setCategories: React.Dispatch<React.SetStateAction<string | undefined>>;
    products: string | undefined;
    setProducts: React.Dispatch<React.SetStateAction<string | undefined>>;
    selectedChip:number | undefined;
    setSelectedChip: React.Dispatch<React.SetStateAction<number | undefined>>;
}   