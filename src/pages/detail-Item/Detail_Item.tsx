import { Box, Container, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Detail_Item() {
  return (
    <Box width='100%' height='100%'>
      <Container>
        {/* head */}
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box fontWeight='bold' fontSize='18px'>
            Detail
          </Box>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        {/* image */}
        <Box>
          <Box width='100%' mt='1rem' component='img' src="https://s8.uupload.ir/files/rectangle_1706_i5d1.png" />
        </Box>
        {/* detail */}
        <Box>
          {/* title */}
          <Typography fontSize='1.6rem' fontWeight='bold'>Cappucino</Typography>
          {/* description */}
          <Typography fontSize='1rem' color='#9B9B9B'>with Chocolate</Typography>
          {/* rank */}
          <Box display='flex' width='5rem' justifyContent='center'  alignItems='center' overflow='hidden'>
            <Box component='img'  src="https://s8.uupload.ir/files/furnitur-icon_bg1w.png" width='30%' mr='5px' />
            <Box component='p' fontSize='24px' fontWeight='bold'>4.8</Box>
          </Box>
          {/* descriptionProduct */}
          {/* size */}
          {/* price */}
          {/* btn buy */}
        </Box>
      </Container>
    </Box>
  )
}
