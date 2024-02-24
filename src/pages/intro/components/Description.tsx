import { Box } from "@mui/material";

export default function Description() {
  return (
    <Box component='div' sx={{textAlign: 'center'}}>
    <Box
      component='p'
      color="#A9A9A9"
      fontSize={15}
      fontWeight='600'
      mx='3rem'
      my='1rem'
      lineHeight='1.2'
      overflow='hidden'
    >
      The best grain, the finest roast, the powerful flavor.
    </Box>
  </Box>
  )
}
