import { Box, Container} from "@mui/material";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Categories from "./components/Categories";





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
                {/* banner */}
                <Box component='img' src="https://s8.uupload.ir/files/frame_17_ycs.png" 
                sx={{width:'100%' , mt:'70%' , position:'relative'}}  zIndex='1' />
                {/* categories */}
                     <Categories />
            </Container>
        </Box>
    </>
  )
}
