import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

export default function Search() {
  return (
    <Box width='100%'>
        <Paper
            component="form"
            sx={{  height:'4rem', p: '2px 4px', display: 'flex', alignItems: 'center'   ,backgroundColor:'#313131' , borderRadius:'20px'}}
            >
            <IconButton type="button" sx={{ p: '10px' , color:'white' }} aria-label="search">
                <SearchIcon fontSize="large" />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1, '&::placeholder': { color: 'white' }, color: 'white' , fontSize:'large' }}
                placeholder="Search coffee"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Box bgcolor='#C67C4E' borderRadius='20px'> 
                <IconButton sx={{ p: '10px'  , color:'white'}} aria-label="directions">
                    <TuneIcon fontSize="large" />
                </IconButton>
            </Box>
        </Paper>
    </Box>
  )
}
