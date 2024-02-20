import { Box, Container} from "@mui/material";
import Profile from "./components/Profile";
import Search from "./components/Search";
export default function Home() {
  return (
    <>
        <Box>
            <Box sx={{background: 'linear-gradient(to left bottom, #131313, #313131)'}}
                width='100%' height='40vh'>
                <Container>
                    <Profile />
                    <Search />                  
                </Container>
            </Box>
        </Box>
    </>
  )
}
