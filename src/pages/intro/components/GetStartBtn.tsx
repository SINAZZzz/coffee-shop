import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from '../../../interfaces/ButtonProps';

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Box component='button'  onClick={onClick}
      sx={{color:'white' , width:'90%' , height:'5rem' , border:'none' , mb:'3rem' ,
        borderRadius:'20px' , backgroundColor:'#C67C4E' , fontSize:24 , fontWeight:500}}>
       Get Started
    </Box>
  );
}

export default function GetStartBtn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home')
  }
  return (
    <Box component='div' sx={{textAlign: 'center'}}> 
    <Button onClick={handleClick} />
  </Box>
  )
}
