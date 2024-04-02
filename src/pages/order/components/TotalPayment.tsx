import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export default function TotalPayment() {
  const {cash} = useContext(AppContext)

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography>Total Payment</Typography>
          <Typography>$ {cash}</Typography>
        </Box>
  )
}
