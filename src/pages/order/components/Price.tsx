import { Box, Typography } from "@mui/material";

export default function Price() {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' my='0.5rem' fontSize='12px'>
          <Typography>Price</Typography>
          <Typography>$ 4.53</Typography>
        </Box>
  )
}
