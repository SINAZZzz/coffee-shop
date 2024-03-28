import { Box, Container, IconButton, Tab, Tabs } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";

export default function Order() {
  const [value, setValue] =useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
        <Box display='flex' width='100%' alignItems='center' justifyContent='center'>
  <Box sx={{ width: '100%' }} display='flex' justifyContent='center'>
  <Tabs
  value={value}
  onChange={handleChange}
  textColor="inherit"
  sx={{
    backgroundColor:'#F2F2F2',
    borderRadius:'15px',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end'
  }}
  aria-label="secondary tabs example"
>
  <Tab value="one" label="Item One" />
  <Tab value="two" label="Item Two" />
</Tabs>

  </Box>
</Box>


      </Container>
    </>
  )
}
