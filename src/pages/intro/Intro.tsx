import { Box } from "@mui/material";
import Background from "./components/Background";
import Description from "./components/Description";
import GetStartBtn from "./components/GetStartBtn";
import Title from "../../components/Title";

export default function Intro() {
  return (
    <>
    <Box bgcolor='black' width='100%' height='100vh'>
      <Background />
      <Title fontSize={2} title="Coffee so good, your taste buds will love it." color="white" mx='2rem' textAlign="center" />
      <Description />
      <GetStartBtn />
    </Box>
    </>
  )
}
 