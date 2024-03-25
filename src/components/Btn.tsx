import { Box } from "@mui/material";
import { btn } from "../interfaces/btn";



export default function Btn({Title , px , bgcolor , color , onClick}:btn) {
  return (
    <Box component='button' onClick={onClick}
        sx={{
        bgcolor:`#${bgcolor}` , color:{color} , fontWeight:'bold'
        , border:'none' , py:'1rem' , px:`${px}%` , borderRadius:'10px'}}>
        {Title}
    </Box>
  )
}
