import { Box, Container} from "@mui/material";
import BtnNavigation from './components/BtnNavigation';
import Profile from './components/Profile';
import Search from './components/Search';
import Banner from './components/Banner';
import Categories from './components/Categories';
import ProductCard from './components/ProductCard';
import Background from './components/Background';

export default function Home() {
  return (
    <>
        <Box position='absolute' zIndex='-1' width='100%' height='100%'>
          <Background />
        </Box>
        <Box position='relative' zIndex='1' mb="6rem">
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
    </>
  )
}
