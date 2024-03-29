import { Box } from "@mui/material"
import Size from "./components/size/Size";
import DescriptionProduct from "./components/descriptionProduct/DescriptionProduct";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Title from "../../../../components/Title";
import { DetailProps } from "../../../../interfaces/DetailProps";
import Hr from "../../../../components/Hr";



export default function Detail({title , description , rank} : DetailProps) {
  return (
    <Box>
        <Title fontSize={1.3} title={title} />
        <ProductDetail description={description} rank={rank} />
        <Hr my="15px" border="1px #EAEAEA solid"  />
        <DescriptionProduct />
        <Size />
  </Box>
  )
}
