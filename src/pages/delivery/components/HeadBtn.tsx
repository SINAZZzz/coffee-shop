import { Box, Container, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import { useNavigate } from 'react-router-dom';

export default function HeadBtn() {
    const navigate = useNavigate();
  return (
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
  )
}
