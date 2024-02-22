import { Box, Container} from "@mui/material";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Banner from "./components/Banner";





export default function Home() {
    
  return (
    <>
        <Box>
            <Box sx={{background: 'linear-gradient(to left bottom, #131313, #313131)'}}
                width='100%' height='40vh' zIndex='0' position='absolute'>
                <Container>
                    <Profile />
                    <Search />     
                </Container>
            </Box>
            <Container sx={{bgcolor:'#F8F6F6', height:'100vh'}}>
                <Banner />
                <Categories />
            </Container>
        </Box>
    </>
  )
}
