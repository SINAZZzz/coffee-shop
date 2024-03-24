import { BottomNavigation } from '@mui/material'
import BtnBuy from './components/BtnBuy'
import Price from './components/Price'
import { useNavigate } from "react-router-dom";
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
                    <BtnBuy onclick={nextPage} />
        </BottomNavigation>
    </>
  )
}
