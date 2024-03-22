import { Box } from "@mui/material"
import Title from "../Title";
import Size from "./components/size/Size";
import DescriptionProduct from "./components/descriptionProduct/DescriptionProduct";
import Hr from "./components/Hr";
import ProductDetail from "./components/ProductDetail/ProductDetail";

export default function Detail() {


  return (
    <Box>
        <Title fontSize={1.3} title="Cappucino" />
        <ProductDetail />
        <Hr />
        <DescriptionProduct />
        <Size />
  </Box>
  )
}
