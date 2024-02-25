import { Box, Container} from "@mui/material";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Background from "./components/Background";
import BtnNavigation from "./components/BtnNavigation";


export default function Home() {
  return (
    <>
      <Box position='relative'>
        <Box position='absolute' zIndex='-1' width='100%' height='100%'>
          <Background />
        </Box>
        <Box position='relative' zIndex='1' mb="4rem">
          <Container>
            <Profile />
            <Search />    
            <Banner />
            <Categories />
            <ProductCard />
          </Container>
        </Box>
        <Box position='relative' zIndex='2'>
          <BtnNavigation />
        </Box>
      </Box>
    </>
  )
}
