import { Box } from '@mui/material';

export default function Title() {
  return (
    <Box
        component='div'
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          color="white"
          fontSize={37}
          fontWeight='600'
          mx='2rem'
          lineHeight='1.2'
        >
          Coffee so good, your taste buds will love it.
        </Box>
      </Box>
  )
}
