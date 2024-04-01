import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, IconButton } from "@mui/material";

export default function Head() {
  const navigate = useNavigate();

  return (
    <Box display='flex' alignItems='center'>
          <IconButton onClick={() => navigate('/detail-Item')}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <Box fontWeight='bold' fontSize='18px' textAlign='center' width='100%' ml='-2.5rem'>
            Order
          </Box>
        </Box>
  )
}
