import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PinkHeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='red' width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const PinkHeartIconWithBorder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" stroke="gray" strokeWidth="2"/>
  </svg>
);


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
            {isFavorite ? <PinkHeartIcon /> : <PinkHeartIconWithBorder />}
          </IconButton>
        </Box>
        {/* image */}
        <Box>
          <Box width='100%' mt='1rem' component='img' src="https://s8.uupload.ir/files/rectangle_1706_390a.png" />
        </Box>
        {/* detail */}
        <Box>
          {/* title */}
          <Typography fontSize='1.3rem' fontWeight='bold'>Cappucino</Typography>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
              {/* description */}
              <Typography fontSize='0.8rem' color='#9B9B9B' mt='5px'>with Chocolate</Typography>
              {/* rank */}
              <Box display='flex' overflow='hidden' mt='10px'>
                <Box component='img'  src="https://s8.uupload.ir/files/furnitur-icon_bg1w.png" width='20px' mr='5px' />
                <Box component='p' fontSize='1rem' fontWeight='bold' pr='5px'>4.8</Box>
                <Typography fontSize='0.8rem' color='#9B9B9B'>(230)</Typography>
              </Box>
            </Box>
            {/* option */}
            <Box>
                <Box component='img'  src="https://s8.uupload.ir/files/bean_ll.png" width='20px' mr='10px' borderRadius='10px' bgcolor='#F4F4F4' p='8px' />
                <Box component='img'  src="https://s8.uupload.ir/files/milk_v5oq.png" width='20px' borderRadius='10px' bgcolor='#F4F4F4' p='8px' />
              </Box>
          </Box>
          <Box component='hr' my='15px' color='#EAEAEA' bgcolor='#EAEAEA' height='0.5px' border='1px #EAEAEA solid ' borderRadius='40px' />
          {/* descriptionProduct */}
          <Typography fontSize='1rem' fontWeight='bold'>Description</Typography>
          <Typography fontSize='0.8rem' color='#9B9B9B' mt='5px'>A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. 
          <Box component='span' color='#C67C4E' fontWeight='bold'>Read More</Box></Typography>
          {/* size */}
          {/* price */}
          {/* btn buy */}
        </Box>
      </Container>
    </Box>
  )
}
