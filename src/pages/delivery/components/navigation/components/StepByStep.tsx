import { Box, Grid } from "@mui/material";

export default function StepByStep() {
  return (
    <Grid container spacing={1} display='flex' flexDirection='row' justifyContent='center' alignItems='center' mb='0.6rem'>
        {[0, 1, 2].map((index) => (
            <Grid item xs={3} key={index}>
                <Box component='hr' border='2px solid #36C07E' borderRadius='15px' />
            </Grid>
        ))} 
         <Grid item xs={3}>
            <Box component='hr' border='2px solid #DFDFDF' borderRadius='15px' />
         </Grid>
    </Grid>
  )
}
