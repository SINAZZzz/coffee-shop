import { BottomNavigation, Box, Container, Typography } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Btn from "../../../../components/Btn";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../../../functions/Utility";

export default function Navigation() {
    const { width } = useWindowSize();
    const navigate = useNavigate();
    
    const NextPage = () => {
        navigate('/delivery')
      }
    
  return (
    <BottomNavigation
    sx={{
        width: "100%",
        position: "fixed", 
        bottom: 0,
        borderRadius:'1rem 1rem 0rem 0rem',
        height:'7rem',
        bgcolor:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    }}
    showLabels
>
  <Container>
    <Box display='flex' justifyContent='space-between' width='100%'>
      <Box display='flex'>
        <LocalAtmIcon fontSize="small" style={{color:'#C67C4E' , marginRight:'0.5rem'}} />
        <Box display='flex' justifyContent='center' alignItems='center' bgcolor='#F6F6F6' borderRadius='15px'>
            <Typography color='white' px='6px' py='1.5px' mr='0.5rem' fontSize='12px' borderRadius='15px' bgcolor='#C67C4E'>Cash</Typography>
            <Typography color='#2F2D2C' pr='0.5rem' fontSize='12px'>$ 5.53</Typography>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' bgcolor='#808080' borderRadius='50%' width="1.3rem" height='1.3rem'>
        <MoreHorizIcon fontSize="small" style={{color:'white'}} />
      </Box>
    </Box>
    <Box display='flex' width='100%' mt='1rem'>
      <Btn Title='Order' onClick={NextPage} fontSize='1rem' borderRadius='15px' border='none' bgcolor='C67C4E' color='white' px={45} py={width > 767 ? 3 : 6} />
      </Box>
  </Container>
</BottomNavigation>
  )
}
