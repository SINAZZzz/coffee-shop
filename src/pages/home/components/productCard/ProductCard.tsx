import { Box, Card, Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { Product } from "../../../../interfaces/Product";
import CardProduct from "./components/Card";



export default function ProductCard() {
  const { products , selectedChip , categories } = useContext(AppContext)
  
  if (!products) {
    return null; 
  }

  const filteredProducts = selectedChip !== undefined ? products.filter((product: Product) => product.title === categories[selectedChip]) : products;
    
  return (
    <Grid container spacing={2} position='relative' zIndex='1'>
    {filteredProducts.map((product) => (
      <Grid item key={product.id} xs={6} sm={6} md={6} lg={6}>
        <CardProduct description={product.description} image={product.image} price={product.price} rank={product.rank} title={product.title}  />
      </Grid>
    ))}
  </Grid>
  )
}
