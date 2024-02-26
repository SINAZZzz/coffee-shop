import { Box, Card, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";


export default function ProductCard() {
  const { products , selectedChip , categories } = useContext(AppContext)
  
  if (!products) {
    return null; 
  }

  const filteredProducts = selectedChip !== undefined ? products.filter(product => product.title === categories[selectedChip]) : products;
  
  return (
    <Grid container spacing={2} position='relative' zIndex='1'>
    {filteredProducts.map((product) => (
      <Grid item key={product.id} xs={6} sm={6} md={6} lg={6}>
        <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', borderRadius: '20px', my: '0.5rem' }}>
          {/* img */}
          <Box bgcolor='rgba(0,0,30,0.4)' color='white' sx={{ backdropFilter: 'blur(3px)' }} mt='0.3rem' ml='0.3rem' display='flex' width='4rem' justifyContent='center' borderRadius='20px 0px 20px 0px' alignItems='center' height='2rem' position='absolute'>
            <Box component='img' src="https://s8.uupload.ir/files/furnitur-icon_bg1w.png" width='0.8rem' mr='5px' />
            <Box component='p' fontSize='12px' fontWeight='bold'>{product.rank}</Box>
          </Box>
          <Box sx={{ width: '94%', m: '0.3rem' }} component='img' src={product.image} />
          <Box mx='1rem'>
            {/* title */}
            <Typography fontSize='1.2rem' fontWeight='bold'>{product.title}</Typography>
            {/* des */}
            <Typography fontSize='1rem' color='#9B9B9B'>{product.description}</Typography>
            {/* price */}
            <Box display='flex' justifyContent='space-between' alignItems='center' my='1rem'>
              <Typography fontWeight='bold' fontSize='1.5rem'>$ {product.price.toFixed(2)}</Typography>
              <Box
                component='button'
                sx={{
                  background: '#C67C4E',
                  color: 'white',
                  height: '2.5rem',
                  width: '2.5rem',
                  borderRadius: '15px',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AddIcon />
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
  )
}
