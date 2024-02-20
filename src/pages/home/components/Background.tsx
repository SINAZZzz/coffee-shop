import { Box } from '@mui/material'

export default function Background() {
  return (
    <Box sx={{background: 'linear-gradient(to left bottom, #131313, #313131)' , zIndex:0}}
            width='100%' height='40vh'></Box>
  )
}
