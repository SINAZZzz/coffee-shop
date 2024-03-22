import { Box, Typography } from "@mui/material"
import Title from "../Title";
import Size from "./components/size/Size";
import DescriptionProduct from "./components/descriptionProduct/DescriptionProduct";
import Hr from "./components/Hr";

export default function Detail() {


  return (
    <Box>
        <Title fontSize={1.3} title="Cappucino" />

        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Box>
                {/* description */}
                <Typography fontSize='0.8rem' color='#9B9B9B' mt='5px'>with Chocolate</Typography>
                {/* rank */}
                <Box display='flex' overflow='hidden' mt='10px'>
                <Box component='img'  src="https://s8.uupload.ir/files/furnitur-icon_bg1w.png" width='20px' mr='5px' />
                <Box component='p' fontSize='1rem' fontWeight='bold' pr='5px'>4.8</Box>
                <Typography fontSize='0.8rem' color='#9B9B9B'>(230)</Typography>
                </Box>
            </Box>
            {/* option */}
            <Box>
                <Box component='img'  src="https://s8.uupload.ir/files/bean_ll.png" width='20px' mr='10px' borderRadius='10px' bgcolor='#F4F4F4' p='8px' />
                <Box component='img'  src="https://s8.uupload.ir/files/milk_v5oq.png" width='20px' borderRadius='10px' bgcolor='#F4F4F4' p='8px' />
            </Box>
        </Box>
        <Hr />
        <DescriptionProduct />
        <Size />
  </Box>
  )
}
