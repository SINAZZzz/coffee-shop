import { Box, IconButton, Typography } from '@mui/material'
import Title from '../../../../components/Title'
import Description from '../../../../components/Description'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import { AppContext } from '../../../../context/AppContext';

export default function NumOfProductOrder() { 
  const {setNumOfProduct , numOfProduct } = useContext(AppContext)
  return (
    <Box display='flex' justifyContent='space-between'>
                  <Box display='flex'>
                    <Box component='img' src="https://s8.uupload.ir/files/rectangle_1706_(1)_763r.png" />
                      <Box ml='1rem' display='flex' flexDirection='column' justifyContent='center'>
                        <Title title="Cappucino" fontSize={1} />
                        <Description description="with Chocolate" color="9B9B9B" textAlign="left" fontSize="0.8rem" />
                      </Box>
                  </Box>
                  <Box display='flex' justifyContent='center' alignItems='center'>
                    <IconButton onClick={() => setNumOfProduct(numOfProduct - 1)}  sx={{border:'1px solid #EAEAEA', width:"1.7rem" , height:'1.7rem' }} disabled={numOfProduct === 1}>
                      <RemoveIcon fontSize="small" style={{color:"black"}} />
                    </IconButton>
                    <Typography color='black' fontWeight='bold' mx='1rem'>{numOfProduct}</Typography>
                    <IconButton onClick={() => setNumOfProduct(numOfProduct + 1)} sx={{border:'1px solid #EAEAEA', width:"1.7rem" , height:'1.7rem' }}>
                      <AddIcon fontSize="small" style={{color:"black"}} />
                    </IconButton>
                  </Box>
                </Box>
  )
}
