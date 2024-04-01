import { Box, Typography } from '@mui/material'

export default function DeliveryFee() {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography>Delivery Fee</Typography>
        <Box display='flex'>
        <Typography mr='0.5rem' color='#2F2D2C'><s>$ 2.0</s></Typography>
        <Typography>$ 1.0</Typography>
        </Box>
  </Box>
  )
}
