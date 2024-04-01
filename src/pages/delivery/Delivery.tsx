import { Box, Container, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";

export default function Delivery() {
    const navigate = useNavigate();
    
    return (
        <Box position="relative" width="100%" height="100vh">
            <Box position="absolute" zIndex="-1" width="100%" height="100%">
                <Box component="img" width="100%" height="100%" src="https://s8.uupload.ir/files/maps_o86d.png" />
            </Box>

            <Box position="absolute"  width="100%" height="100%" >
                <Box component="img" width='46%' height='19%' src="https://s8.uupload.ir/files/vector_2_2yyk.png" mt='8.5rem' ml='5.6rem' />
            </Box>
            <Box position="absolute"  width="100%" height="100%" >
                <IconButton sx={{ bgcolor: 'white', p: '0.8rem' , mt:'16rem' ,  ml:'16.2rem' }}>
                    <DirectionsBikeIcon fontSize="small" style={{color:'#C67C4E'}} />
                </IconButton>
            </Box>
            <Box position="absolute"  width="100%" height="100%" >
                <IconButton sx={{mt:'10.5rem' ,  ml:'4.5rem' }}>
                    <LocationOnIcon fontSize="small" style={{color:'#C67C4E'}} />
                </IconButton>
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
        </Box>
    );
}
