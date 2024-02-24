import { Box } from "@mui/material";
import Background from "./components/Background";
import Title from "./components/Title";
import Description from "./components/Description";
import GetStartBtn from "./components/GetStartBtn";

export default function Intro() {
  return (
    <>
    <Box bgcolor='black' width='100%' height='100vh'>
      <Background />
      <Title />
      <Description />
      <GetStartBtn />
    </Box>
    </>
  )
}
