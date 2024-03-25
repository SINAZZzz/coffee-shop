import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { priceType } from '../../../../../types/priceType';


export default function Price({price} : priceType) {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' my='1rem'>
        <Typography fontWeight='bold' fontSize='1.5rem'>$ {price.toFixed(2)}</Typography>
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
  )
}
