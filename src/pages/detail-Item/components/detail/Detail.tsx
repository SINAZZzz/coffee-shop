import { Box } from "@mui/material"
import Title from "../Title";
import Size from "./components/size/Size";
import DescriptionProduct from "./components/descriptionProduct/DescriptionProduct";
import Hr from "./components/Hr";
import ProductDetail from "./components/ProductDetail/ProductDetail";




export default function Detail({title , description , rank} : {title:string , description:string , rank:number}) {


  return (
    <Box>
        <Title fontSize={1.3} title={title} />
        <ProductDetail description={description} rank={rank} />
        <Hr />
        <DescriptionProduct />
        <Size />
  </Box>
  )
}
