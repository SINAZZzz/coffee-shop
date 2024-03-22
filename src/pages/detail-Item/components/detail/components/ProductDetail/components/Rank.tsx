import { Box, Typography } from '@mui/material'

export default function Rank() {
  return (
    <>
        <Box display='flex' overflow='hidden' mt='10px'>
                <Box component='img'  src="https://s8.uupload.ir/files/furnitur-icon_bg1w.png" width='20px' mr='5px' />
                <Box component='p' fontSize='1rem' fontWeight='bold' pr='5px'>4.8</Box>
                <Typography fontSize='0.8rem' color='#9B9B9B'>(230)</Typography>
        </Box>
    </>
  )
}
