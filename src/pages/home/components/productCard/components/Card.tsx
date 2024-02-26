import { Box , Card } from "@mui/material";
import ImageProduct from "./ImageProduct";
import Rank from "./Rank";
import Title from "./Title";
import Description from "./Description";
import Price from "./Price";

export default function CardProduct({price , description , title , image , rank}) {
  return (
    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', borderRadius: '20px', my: '0.5rem' }}>
        <Rank rank={rank} />
        <ImageProduct image={image} />
        <Box mx='1rem'>
        <Title title={title} />
        <Description description={description} />
        <Price price={price} />
        </Box>
  </Card>
  )
}
