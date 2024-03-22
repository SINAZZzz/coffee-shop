import { BottomNavigation, Box, Container, Typography } from "@mui/material";
import Head from "./components/Head";
import ProductImg from "./components/ProductImg";
import Detail from "./components/detail/Detail";





export default function Detail_Item() {


  return (
    <Box width='100%' height='100%'>
      <Container>
        <Head />
        <ProductImg />
        {/* detail */}
       <Detail />
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
