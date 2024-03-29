import { Box } from "@mui/material";
import { HrProps } from "../interfaces/HrProps";



export default function Hr({my , color ,bgcolor , height , border , borderRadius} : HrProps) {
  return (
    <Box component='hr' my={my} color={color} bgcolor={bgcolor} height={height} border={border} borderRadius={borderRadius} />
  )
}
