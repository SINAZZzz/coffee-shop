import { Box, Container, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import { useNavigate } from "react-router-dom";

export default function Delivery() {
    const navigate = useNavigate();
    
    return (
        <Box position="relative" width="100%" height="100vh">
            {/* Background map */}
            <Box position="absolute" zIndex="-1" width="100%" height="100%">
                <Box component="img" width="100%" height="100%" src="https://s8.uupload.ir/files/maps_o86d.png" />
            </Box>

            {/* Image map area */}
            <Box position="absolute"  width="100%" height="100%" >
                <Box component="img" width='46%' height='20%' src="https://s8.uupload.ir/files/vector_2_2yyk.png" mt='8.3rem' ml='5.8rem' />
            </Box>

            {/* Content */}
            {/* <Box position="relative" zIndex="1" width="100%" height="100%">
                <Container>
                    <Box display="flex" alignItems="center" justifyContent="space-between" mt="1rem">
                        <IconButton onClick={() => navigate('/order')} sx={{ bgcolor: 'gray', p: '0.8rem', borderRadius: '15px' }}>
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>
                        <IconButton sx={{ bgcolor: 'gray', p: '0.8rem', borderRadius: '15px' }}>
                            <MyLocationOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Container>
            </Box> */}
        </Box>
    );
}
