import {BottomNavigation, Container } from '@mui/material'
import BtnModal from './components/BtnModal';
import StepByStep from './components/StepByStep';
import DeliveredBox from './components/DeliveredBox';
import ClientProfile from './components/ClientProfile';

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
    <BtnModal />
    <StepByStep />
    <DeliveredBox />    
    <ClientProfile />
  </Container>
</BottomNavigation>
  )
}
