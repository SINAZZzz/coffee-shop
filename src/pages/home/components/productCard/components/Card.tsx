import { Box , Card } from "@mui/material";
import ImageProduct from "./ImageProduct";
import Rank from "./Rank";
import Title from "./Title";
import Description from "./Description";
import Price from "./Price";
import { CardProductProps } from '../../../../../../types/CardProductProps';



export default function CardProduct({ price, description, title, image, rank }: CardProductProps) {
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