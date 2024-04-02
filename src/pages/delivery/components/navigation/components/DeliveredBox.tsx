import { Box } from "@mui/material";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";

export default function DeliveredBox() {
  return (
    <Box border='1px solid #EAEAEA' display='flex' justifyContent='space-between' mb="1rem" alignItems='center' p='15px' borderRadius='15px' >
        <Box display='flex' alignItems='center' justifyContent='center'>
            <Box border='1px solid #EAEAEA' display='flex' justifyContent='center' alignItems='center' p='15px' borderRadius='15px' mr='1rem'>
                <Box component='img' src='https://s8.uupload.ir/files/bike_i4jm.png' width='3.5rem' />
            </Box>
            <Box>
                <Title fontSize={1} title="Delivered your order" />
                <Description fontSize="0.8rem" description="We deliver your goods to you in the shortes possible time." color="#808080" textAlign="left" />
            </Box>
        </Box>
    </Box>
  )
}
