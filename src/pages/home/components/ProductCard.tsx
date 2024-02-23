import { Box, Card, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Product } from "../../../interfaces/Product";

const products: Product[] = [
    {
      id: 1,
      title: "Cappucino",
      description: "with Chocolate",
      price: 4.53,
      image: "https://s8.uupload.ir/files/rectangle_1706_i5d1.png"
    },
    {
      id: 2,
      title: "Espresso",
      description: "Strong and Dark",
      price: 3.99,
      image: "https://s8.uupload.ir/files/rectangle_1706_i5d1.png"
    },
    {
        id: 2,
        title: "Espresso",
        description: "Strong and Dark",
        price: 3.99,
        image: "https://s8.uupload.ir/files/rectangle_1706_i5d1.png"
      },
      {
        id: 2,
        title: "Espresso",
        description: "Strong and Dark",
        price: 3.99,
        image: "https://s8.uupload.ir/files/rectangle_1706_i5d1.png"
      },
  ];

export default function ProductCard() {
  return (
    <Grid container spacing={2} position='relative' zIndex='1'>
        {products.map((product) => (
        <Grid item key={product.id} xs={6} sm={6} md={6} lg={6}>
            <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', borderRadius: '20px' , my:'0.5rem' }}>
                {/* img */}
                <Box sx={{ width: '94%', m:'0.3rem'}} component='img' src={product.image} />
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
