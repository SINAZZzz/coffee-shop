import { Box, IconButton, Typography } from '@mui/material'
import Title from '../../../../components/Title'
import Description from '../../../../components/Description'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export default function NumOfProductOrder() {
  const [value, setValue] = useState(1); 
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
                    <IconButton onClick={() => setValue(value - 1)}  sx={{border:'1px solid #EAEAEA', width:"1.7rem" , height:'1.7rem' }} disabled={value === 1}>
                      <RemoveIcon fontSize="small" style={{color:"black"}} />
                    </IconButton>
                    <Typography color='black' fontWeight='bold' mx='1rem'>{value}</Typography>
                    <IconButton onClick={() => setValue(value + 1)} sx={{border:'1px solid #EAEAEA', width:"1.7rem" , height:'1.7rem' }}>
                      <AddIcon fontSize="small" style={{color:"black"}} />
                    </IconButton>
                  </Box>
                </Box>
  )
}
