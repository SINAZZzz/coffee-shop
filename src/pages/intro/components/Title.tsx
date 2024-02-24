import { Box } from '@mui/material';

export default function Title() {
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
          Coffee so good, your taste buds will love it.
        </Box>
      </Box>
  )
}
