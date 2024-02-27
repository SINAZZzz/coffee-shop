import { Box } from "@mui/material";
import { RankType } from '../../../../../../types/RankType';



export default function Rank({rank} : RankType) {
  return (
    <Box bgcolor='rgba(0,0,30,0.4)' color='white' sx={{ backdropFilter: 'blur(3px)' }} mt='0.3rem' ml='0.3rem' display='flex' width='4rem' justifyContent='center' borderRadius='20px 0px 20px 0px' alignItems='center' height='2rem' position='absolute'>
        <Box component='img' src="https://s8.uupload.ir/files/furnitur-icon_bg1w.png" width='0.8rem' mr='5px' />
        <Box component='p' fontSize='12px' fontWeight='bold'>{rank}</Box>
    </Box>
  )
}
