import { Box } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

export default function Title() {
  const {dataIntro} = useContext(AppContext)
  return (
    <Box component='div' sx={{textAlign: 'center'}}>
        <Box
          component='p'
          color="white"
          fontSize={37}
          fontWeight='600'
          mx='2rem'
          lineHeight='1.2'
          overflow='hidden'
        >
          {dataIntro && dataIntro.title}
        </Box>
      </Box> 
  )
}
