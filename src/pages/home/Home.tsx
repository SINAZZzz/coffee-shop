import { Box, Container} from "@mui/material";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Background from "./components/Background";

export default function Home() {
    
  return (
    <>
        <Box position='relative'> {/* Container */}
        <Box position='absolute' zIndex='-1' width='100%' height='100%'> {/* Background */}
          <Background />
        </Box>
        <Box position='relative' zIndex='1'>
          <Container>
            <Profile />
            <Search />   
            <Banner />
          </Container>
        </Box>
      </Box>
    </>
  )
}


            {/* <Box sx={{background: 'linear-gradient(to left bottom, #131313, #313131)'}}
                width='100%' height='40vh' zIndex='0' position='absolute'>
                <Container>
                    <Profile />
                    <Search />     
                </Container>
            </Box>
            <Container sx={{bgcolor:'#F8F6F6', height:'100vh'}}>
                <Banner />
                <Categories />
                <ProductCard />
            </Container> */}