import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Avatar, Box } from '@mui/material';
import Description from '../../../../../components/Description';
import Title from '../../../../../components/Title';

export default function ClientProfile() {
  return (
    <Box mb='1rem' display='flex' justifyContent='space-between' alignItems='center'>
    <Box display='flex' justifyContent='center' alignItems='center'>
        <Avatar sx={{backgroundColor:'transparent' , width:'4rem' , height:'4rem' , mr:'10px'}} variant="rounded">
            <Box component="img" src="https://s6.uupload.ir/files/user_0ek2.jpg" borderRadius='15px' />
        </Avatar>
        <Box>
                <Title fontSize={1} title="Johan Hawn" />
                <Description fontSize="0.8rem" description="Personal Courier" color="#808080" textAlign="left" />
        </Box>
    </Box>
    <Box border='1px solid #EAEAEA' display='flex' justifyContent='center' alignItems='center' p='15px' borderRadius='15px' mr='1rem'>
            <LocalPhoneIcon style={{color:'#808080'}} />
    </Box>
</Box>
  )
}
