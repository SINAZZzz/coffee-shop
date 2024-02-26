import { Box, IconButton } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune';

export default function SettingSearch() {
  return (
    <Box bgcolor='#C67C4E' borderRadius='20px'> 
        <IconButton sx={{ p: '10px'  , color:'white'}} aria-label="directions">
            <TuneIcon fontSize="large" />
        </IconButton>
    </Box>
  )
}
