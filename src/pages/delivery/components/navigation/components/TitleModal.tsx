import { Box, Typography } from "@mui/material";
import Title from "../../../../../components/Title";

export default function TitleModal() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' my='1rem'>
        <Title title="10 minutes left" fontSize={1} />
        <Typography fontSize='12px'><Box component='span' color='#808080'>Delivery to </Box><Box component='span' fontWeight='bold'> Jl. Kpg Sutoyo</Box></Typography>
    </Box>
  )
}
