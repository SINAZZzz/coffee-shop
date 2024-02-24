import { Box } from "@mui/material";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";

export default function Description() {
  const {dataIntro} = useContext(AppContext)
  return (
    <Box component='div' sx={{textAlign: 'center'}}>
    <Box
      component='p'
      color="#A9A9A9"
      fontSize={15}
      fontWeight='600'
      mx='3rem'
      my='1rem'
      lineHeight='1.2'
      overflow='hidden'
    >
      {dataIntro && dataIntro.description}
    </Box>
  </Box>
  )
}