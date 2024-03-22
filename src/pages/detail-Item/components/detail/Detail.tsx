import { Box } from "@mui/material"
import Title from "../Title";
import Size from "./components/size/Size";
import DescriptionProduct from "./components/descriptionProduct/DescriptionProduct";
import Hr from "./components/Hr";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { AppContext } from "../../../../context/AppContext";
import { useContext } from "react";

export default function Detail() {
  const { products , productId } = useContext(AppContext);
  if (!products) {
    return <div>Loading...</div>;
  }

  if (productId === undefined || productId >= products.length) {
    return <div>Product not found.</div>;
  }

  const product = products[productId];

  return (
    <Box>
        <Title fontSize={1.3} title={product.title} />
        <ProductDetail description={product.description} rank={product.rank} />
        <Hr />
        <DescriptionProduct />
        <Size />
  </Box>
  )
}
