import { Box } from '@mui/material'

export default function GetStartBtn() {
  return (
    <Box
        component='div'
        sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        }}
    >
    <Box component='button' 
      sx={{color:'white' , width:'90%' , height:'5rem' , border:'none' , mb:'3rem' ,
        borderRadius:'20px' , backgroundColor:'#C67C4E' , fontSize:24 , fontWeight:500}}>
       Get Started
    </Box>
  </Box>
  )
}
