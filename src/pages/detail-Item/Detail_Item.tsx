import { BottomNavigation, Box, Container, Typography } from "@mui/material";
import Head from "./components/Head";
import ProductImg from "./components/ProductImg";
import Detail from "./components/detail/Detail";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";



type ProductType = {
  title: string;
  description: string;
  rank: number;
};

export default function Detail_Item() {
  const { products , productId } = useContext(AppContext);
  if (!products) {
    return <div>Loading...</div>;
  }

  if (productId === undefined || productId >= products.length) {
    return <div>Product not found.</div>;
  }

  const productCandidate = products[productId];

  if (typeof productCandidate !== 'object' || productCandidate === null) {
    return <div>Error: Product data is not in the expected format.</div>;
  }

  const product: ProductType = productCandidate as ProductType;

  return (
    <Box width='100%' height='100%'>
      <Container>
        <Head />
        <ProductImg />
        <Detail description={product.description}  rank={product.rank} title={product.title} />
      </Container>
      {/* Navigation  */}
      <BottomNavigation 
       sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          borderRadius:'1rem 1rem 0rem 0rem',
          height:'5rem',
          bgcolor:'white',
          display:'flex',
          justifyContent:'space-around',
          alignItems:'center'
        }}
        showLabels>
          {/* price */}
          <Box display='flex'  flexDirection="column" justifyContent='center' alignItems='start'>
            <Typography fontSize='0.8rem' color='#9B9B9B' mt='5px'>Price</Typography>
            <Typography fontSize='1rem' color='#C67C4E' fontWeight='bold'>$ 4.53</Typography>
          </Box>
          {/* button Buy */}
          <Box component='button' 
          sx={{bgcolor:'#C67C4E' , color:'white' , fontWeight:'bold' , border:'none' , py:'1rem' , px:'4rem' , borderRadius:'10px'}}>
            Buy Now
          </Box>
        </BottomNavigation>
    </Box>
  )
}
