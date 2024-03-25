import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { Product } from "../../../../interfaces/Product";
import CardProduct from "./components/Card";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const navigate = useNavigate();
  const { products, selectedChip  , setProductId} = useContext(AppContext);
  
  if (!Array.isArray(products)) {
    return null; 
  }

  const filteredProducts: Product[] = selectedChip !== undefined 
    ? products.filter((product: Product) => product.id === selectedChip) 
    : products;
 
    const nextPage = () =>{
      setProductId(0);
      navigate('/detail-Item')
    }
    
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
            onClick={() => nextPage()}
          />
        </Grid>
      ))}
    </Grid>
  ); 
}
