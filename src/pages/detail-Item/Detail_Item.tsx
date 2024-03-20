import { Box, Container, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Detail_Item() {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  }
  return (
    <Box width='100%' height='100%'>
      <Container>
        {/* head */}
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <IconButton>
            <ArrowBackIosNewIcon onClick={() => navigate('/home')} />
          </IconButton>
          <Box fontWeight='bold' fontSize='18px'>
            Detail
          </Box>
          <IconButton onClick={handleFavoriteClick}> 
            <FavoriteIcon style={{ color: isFavorite ? 'red' : 'inherit' }} />
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
