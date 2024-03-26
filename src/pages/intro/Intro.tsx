import { Box } from "@mui/material";
import Background from "./components/Background";
import Title from "../../components/Title";
import Description from "../../components/Description";
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  const NextPage = () => {
    navigate('/home')
  }


  return (
    <>
    <Box bgcolor='black' width='100%' height='100vh'>
      <Background />
      <Title fontSize={2} title="Coffee so good, your taste buds will love it." color="white" mx='2rem' textAlign="center" />
      <Description color="A9A9A9" fontSize="1.1rem" mx="3rem" my="1rem" textAlign="center"
       description="The best grain, the finest roast, the powerful flavor." />
      <Box component='div' sx={{textAlign: 'center'}}>
        <Btn Title="Get Started" bgcolor="C67C4E" fontSize="1.5rem" color="white" onClick={NextPage} width="90%" py={7} mb="3rem" borderRadius="20px" />
      </Box>
    </Box>
    </>
  )
}
 