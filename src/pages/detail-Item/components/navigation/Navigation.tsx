import { BottomNavigation } from '@mui/material'
import Price from './components/Price'
import { useNavigate } from "react-router-dom";
import Btn from '../../../../components/Btn';
export default function Navigation({price} : {price : number}) {
  const navigate = useNavigate();

  const nextPage = () =>{
    navigate('/order')
  }
  return (
    <>
        <BottomNavigation
            sx={{
                width: "100%",
                position: "fixed",
                bottom: 0,
                borderRadius:'1rem 1rem 0rem 0rem',
                height:'5rem',
                bgcolor:'white',
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center'
                }}
                showLabels>
                    <Price price={price}/>
                    <Btn Title='Buy Now' bgcolor='C67C4E' color='white' px={25} onClick={nextPage} />
        </BottomNavigation>
    </>
  )
}
