import { Box, Typography } from '@mui/material'
import PercentIcon from '@mui/icons-material/Percent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function DiscountBox() {
  return (
    <Box border='1px solid #EAEAEA' display='flex' justifyContent='space-between' mb="1rem" alignItems='center' p='10px' borderRadius='15px' >
          <Box display='flex' alignItems='center' justifyContent='center'>
            <PercentIcon fontSize="small" style={{color:'#C67C4E' , marginRight:'0.5rem'}} />
            <Typography>1 Discount is applied</Typography>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <ArrowForwardIosIcon fontSize="small" />
          </Box>
        </Box>
  )
}
