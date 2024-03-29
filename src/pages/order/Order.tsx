import { BottomNavigation, BottomNavigationAction, Box, Container, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";

export default function Order() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Container>
        {/* Head */}
        <Box display='flex' alignItems='center'>
          <IconButton>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <Box fontWeight='bold' fontSize='18px' textAlign='center' width='100%' ml='-2.5rem'>
            Order
          </Box>
        </Box>
        {/* Tab */}
        <Box sx={{ width: '100%' }}>
          <BottomNavigation
            showLabels
            value={active}
            onChange={(e, newValue) => {
              setActive(newValue);
            }}
            sx={{bgcolor:'#F2F2F2' ,borderRadius:'20px'}}
          >
            <BottomNavigationAction label="Deliver" sx={{bgcolor:active ? "inherit" : "#C67C4E" ,
             borderRadius:'15px' , m:"5px" , fontWeight:'bold'}} style={{ color: active ? "inherit" : "white" }} />
            <BottomNavigationAction label="Pick Up" sx={{bgcolor:!active ? "inherit" : "#C67C4E" ,
             borderRadius:'15px' , m:"5px" , fontWeight:'bold'}} style={{ color: !active ? "inherit" : "white" }} />
          </BottomNavigation>
        </Box>


      </Container>
    </>
  )
}
