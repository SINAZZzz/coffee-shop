export interface AppContextType {
    dataIntro: string | undefined;
    setDataIntro: React.Dispatch<React.SetStateAction<string | undefined>>;
    categories: string | undefined;
    setCategories: React.Dispatch<React.SetStateAction<string | undefined>>;
    products: string | undefined;
    setProducts: React.Dispatch<React.SetStateAction<string | undefined>>;
}