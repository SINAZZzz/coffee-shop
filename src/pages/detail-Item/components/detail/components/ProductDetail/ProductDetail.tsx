import { Box } from '@mui/material'
import Description from './components/Description'
import Rank from './components/Rank'
import Option from './components/Option'

export default function ProductDetail() {
  return (
    <>
         <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
                <Description />
                <Rank />
            </Box>
            <Option />
        </Box>
    </>
  )
}
