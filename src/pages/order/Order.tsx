import { BottomNavigation, BottomNavigationAction, Box, Chip, Container, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";
import Title from "../../components/Title";
import Description from "../../components/Description";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

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
            onChange={(_, newValue) => {
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
        {/* address */}
            <Box>
              <Title title="Delivery Address" fontSize={1} />
              <Title title="Jl. Kpg Sutoyo" fontSize={0.9} />
              <Description description="Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai." color="808080" fontSize="0.8rem" textAlign="left" />
              <Box display='flex'>
                <Chip icon={<BorderColorOutlinedIcon 
                style={{color:'#303336' , fontSize:'15px'}}  />} label="Edit Address" variant="outlined" />
                <Chip icon={<ArticleOutlinedIcon 
                style={{color:'#303336' , fontSize:'15px'}}  />} sx={{ml:'1rem'}} label="Edit Address" variant="outlined"  />
              </Box>
            </Box>

      </Container>
    </>
  )
}
