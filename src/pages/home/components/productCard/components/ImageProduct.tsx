import { Box } from "@mui/material";

export default function ImageProduct({image}) {
  return (
    <Box sx={{ width: '94%', m: '0.3rem' }} component='img' src={image} />
  )
}
