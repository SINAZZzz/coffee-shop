import { Box } from "@mui/material";
import { CardProductProps } from "../../../../../../types/CardProductProps";



export default function ImageProduct({image} : CardProductProps) {
  return (
    <Box sx={{ width: '94%', m: '0.3rem' }} component='img' src={image} />
  )
}
