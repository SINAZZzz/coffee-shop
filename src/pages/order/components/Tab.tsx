import { Box, Typography } from '@mui/material'
import { useState } from 'react';



export default function Tab() {
    const [activeTab, setActiveTab] = useState('Deliver');
    const handleTabClick = (tabName:string) => {
        setActiveTab(tabName);
    };
    
  return (
    <Box width="100%" bgcolor="#F2F2F2" display="flex" borderRadius='12px' my='0rem'>
    <Typography
      variant="body1"
      onClick={() => handleTabClick('Deliver')}
      style={{
        width: '50%',
        cursor: 'pointer',
        backgroundColor: activeTab === 'Deliver' ? '#C67C4E' : 'transparent',
        padding: '8px',
        borderRadius:'12px',
        color: activeTab === 'Deliver' ? 'white' : 'inherit',
        margin:"4px",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      Deliver
    </Typography>
    <Typography
      variant="body1"
      onClick={() => handleTabClick('Pick Up')}
      style={{
        width: '50%',
        cursor: 'pointer',
        backgroundColor: activeTab === 'Pick Up' ? '#C67C4E' : 'transparent',
        padding: '8px',
        borderRadius:'12px',
        color: activeTab === 'Pick Up' ? 'white' : 'inherit',
        margin:"4px",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      Pick Up
    </Typography>
  </Box>
  )
}
