import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Box, Container } from "@mui/material";
import Head from "./components/Head";
import ProductImg from "./components/ProductImg";
import Detail from "./components/detail/Detail";
import Navigation from "./components/navigation/Navigation";
import { ProductType } from "../../types/ProductType";

export default function Detail_Item() {
  const { products , productId } = useContext(AppContext);
  if (!products) {
    return <div>Loading...</div>;
  }

  if (productId === undefined || productId >= products.length) {
    return <div>Product not found.</div>;
  }

  const productCandidate = products[productId];

  if (typeof productCandidate !== 'object' || productCandidate === null) {
    return <div>Error: Product data is not in the expected format.</div>;
  }

  const product: ProductType = productCandidate as ProductType;

  return (
    <Box width='100%' height='100%'>
      <Container>
        <Head />
        <ProductImg />
        <Detail description={product.description}  rank={product.rank} title={product.title} />
      </Container>
      <Navigation price={product.price} />
    </Box>
  )
}
