import { Avatar, BottomNavigation, Box, Container, Grid, Typography } from '@mui/material'
import Title from '../../../../components/Title'
import Description from '../../../../components/Description'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Navigation() {
  return (
    <BottomNavigation
    sx={{
        width: "100%",
        position: "fixed", 
        bottom: 0,
        borderRadius:'1rem 1rem 0rem 0rem',
        height:'fit-content',
        bgcolor:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    }}
    showLabels
>
  <Container>
    {/* btn for open or close modal */}
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' my='0.5rem'>
        <Box component='hr' width='2rem' border='2px solid #EAEAEA' borderRadius='15px' />
    </Box>
    {/* title and description */}
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' my='1rem'>
        <Title title="10 minutes left" fontSize={1} />
        <Typography fontSize='12px'><Box component='span' color='#808080'>Delivery to </Box><Box component='span' fontWeight='bold'> Jl. Kpg Sutoyo</Box></Typography>
    </Box>
    {/* done step by step  */}
    <Grid container spacing={1} display='flex' flexDirection='row' justifyContent='center' alignItems='center' mb='0.6rem'>
        {[0, 1, 2].map((index) => (
            <Grid item xs={3} key={index}>
                <Box component='hr' border='2px solid #36C07E' borderRadius='15px' />
            </Grid>
        ))} 
         <Grid item xs={3}>
            <Box component='hr' border='2px solid #DFDFDF' borderRadius='15px' />
         </Grid>
    </Grid>

    {/* Delivered your order box  */}
    <Box border='1px solid #EAEAEA' display='flex' justifyContent='space-between' mb="1rem" alignItems='center' p='15px' borderRadius='15px' >
        <Box display='flex' alignItems='center' justifyContent='center'>
            <Box border='1px solid #EAEAEA' display='flex' justifyContent='center' alignItems='center' p='15px' borderRadius='15px' mr='1rem'>
                <Box component='img' src='https://s8.uupload.ir/files/bike_i4jm.png' width='3.5rem' />
            </Box>
            <Box>
                <Title fontSize={1} title="Delivered your order" />
                <Description fontSize="0.8rem" description="We deliver your goods to you in the shortes possible time." color="#808080" textAlign="left" />
            </Box>
        </Box>
    </Box>
    {/* Profile user */}
    {/* user name and phone */}
    <Box mb='1rem' display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' justifyContent='center' alignItems='center'>
            <Avatar sx={{backgroundColor:'transparent' , width:'4rem' , height:'4rem' , mr:'10px'}} variant="rounded">
                <Box component="img" src="https://s6.uupload.ir/files/user_0ek2.jpg" borderRadius='15px' />
            </Avatar>
            <Box>
                    <Title fontSize={1} title="Johan Hawn" />
                    <Description fontSize="0.8rem" description="Personal Courier" color="#808080" textAlign="left" />
            </Box>
        </Box>
        <Box border='1px solid #EAEAEA' display='flex' justifyContent='center' alignItems='center' p='15px' borderRadius='15px' mr='1rem'>
                <LocalPhoneIcon style={{color:'#808080'}} />
        </Box>
    </Box>
  </Container>
</BottomNavigation>
  )
}
