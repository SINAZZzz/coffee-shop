import { Box } from "@mui/material";
import Background from "./components/Background";

export default function Intro() {
  return (
    <>
    <Box bgcolor='black' width='100%' height='100vh'>
      {/* background */}
      <Background />
      {/* Title */}
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
        <Box
          color="white"
          fontSize={37}
          fontWeight='600'
          mx='2rem'
          lineHeight='1.2'
        >
          Coffee so good, your taste buds will love it.
        </Box>
      </Box>
    </Box>
    </>
  )
}
