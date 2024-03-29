import { BottomNavigation, BottomNavigationAction, Box, Chip, Container, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";
import Title from "../../components/Title";
import Description from "../../components/Description";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Hr from "../../components/Hr";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Order() {
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(1);

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
            {/* hr */}
          <Hr my="15px" border="1px #EAEAEA solid"  />
                  {/* Number of products ordered */}
                <Box display='flex' justifyContent='space-between'>
                  <Box display='flex'>
                    <Box component='img' src="https://s8.uupload.ir/files/rectangle_1706_(1)_763r.png" />
                      <Box ml='1rem' display='flex' flexDirection='column' justifyContent='center'>
                        <Title title="Cappucino" fontSize={1} />
                        <Description description="with Chocolate" color="9B9B9B" textAlign="left" fontSize="0.8rem" />
                      </Box>
                  </Box>
                  <Box display='flex' justifyContent='center' alignItems='center'>
                    <IconButton onClick={() => setValue(value - 1)}  sx={{border:'1px solid', width:"1.7rem" , height:'1.7rem' }} disabled={value === 1}>
                      <RemoveIcon fontSize="small" style={{color:"black"}} />
                    </IconButton>
                    <Typography color='black' fontWeight='bold' mx='1rem'>{value}</Typography>
                    <IconButton onClick={() => setValue(value + 1)} sx={{border:'1px solid', width:"1.7rem" , height:'1.7rem' }}>
                      <AddIcon fontSize="small" style={{color:"black"}} />
                    </IconButton>
                  </Box>
                </Box>
      </Container>
      <Hr my="15px" border="3px #EAEAEA solid"  />
      <Container>
        {/* discount box */}
        {/* ... */}
        {/* Payment Summary */}
        {/* Price */}
        {/* Delivery Fee */}
        <Hr my="15px" border="1px #EAEAEA solid"  />
        {/* Total Payment */}
        {/* nav btn */}
      </Container>
    </>
  )
}
