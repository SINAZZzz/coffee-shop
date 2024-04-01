import { BottomNavigation, Box, Container, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import Description from "../../components/Description";

export default function Delivery() {
    const navigate = useNavigate();
    
    return (
    <>
        <Box position="relative" width="100%" height="100vh" overflow='hidden'>
            <Box position="absolute" zIndex="-1" width="100%" height="100%">
                <Box component="img" width="100%" height="100%" src="https://s8.uupload.ir/files/group_3159_wiw5.png" />
            </Box>

            <Box position="relative" zIndex="1" width="100%" height="100%">
                <Container>
                    <Box display="flex" alignItems="center" justifyContent="space-between" mt="1rem">
                        <IconButton onClick={() => navigate('/order')} sx={{ bgcolor: 'white', p: '0.8rem', borderRadius: '15px' }}>
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>
                            <MyLocationOutlinedIcon fontSize="small" style={{backgroundColor:'white' , padding:'0.8rem' , borderRadius:'15px'}} />
                    </Box>
                </Container>
            </Box>

             {/* nav btn */}
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
            <Grid container spacing={1} display='flex' flexDirection='row' justifyContent='center' alignItems='center' my='0.5rem'>
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
            {/* user name and phone */}
            <Box>
                <Avatar sx={{backgroundColor:'transparent'}} variant="rounded">
                    <Box component="img" src="https://s6.uupload.ir/files/user_0ek2.jpg"
                        sx={{width:'3rem' , borderRadius:'10px'}} />
                </Avatar>
            </Box>
          </Container>
        </BottomNavigation>
        </Box>
    </>
    );
}
