import { Box, Grid, IconButton, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Profile() {
  return (
    <Grid container spacing={2} display='flex' justifyContent='center'      justifyItems='center' alignContent='center' alignItems='center' mb='2rem' mt='3rem'>
        <Grid item xs={10}>
            {/* Location */}
            <Typography color='#B7B7B7'>Location</Typography>
            <Box display='flex' alignItems='center'>
                <Typography color='#DDDDDD' sx={{fontWeight: 600, fontSize: '20px'}}>Iran, Kashan</Typography>
                <IconButton>
                    <KeyboardArrowDownIcon sx={{color:'white'}}/>
                </IconButton>
            </Box>
        </Grid>
        {/* profile */}
        <Grid item xs={2}>
            <Box component="img" src="https://s6.uupload.ir/files/user_0ek2.jpg"
            sx={{width:'3rem' , borderRadius:'10px'}} />
        </Grid>
    </Grid>
  )
}
