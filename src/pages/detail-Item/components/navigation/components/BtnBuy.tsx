import { Box } from '@mui/material'

export default function BtnBuy({onclick}: {onclick : React.MouseEventHandler<HTMLButtonElement> | undefined }) {
  return (
    <Box component='button' onClick={onclick}
                sx={{
                  bgcolor:'#C67C4E' , color:'white' , fontWeight:'bold'
                   , border:'none' , py:'1rem' , px:'25%' , borderRadius:'10px'}}>
                    Buy Now
                </Box>
  )
}
