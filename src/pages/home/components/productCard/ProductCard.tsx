import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { Product } from "../../../../interfaces/Product";
import CardProduct from "./components/Card";

export default function ProductCard() {
  const { products, selectedChip } = useContext(AppContext);
  
  if (!Array.isArray(products)) {
    return null; 
  }

  const filteredProducts: Product[] = selectedChip !== undefined 
    ? products.filter((product: Product) => product.id === selectedChip) 
    : products;
    
  return (
    <Grid container spacing={2} position='relative' zIndex='1'>
      {filteredProducts.map((product: Product) => (  
        <Grid item key={product.id} xs={6} sm={6} md={6} lg={6}>
          <CardProduct 
            description={product.description} 
            image={product.image} 
            price={product.price} 
            rank={product.rank} 
            title={product.title}  
          />
        </Grid>
      ))}
    </Grid>
  ); 
}
