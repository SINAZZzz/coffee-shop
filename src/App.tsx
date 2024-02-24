import { Route, Routes } from "react-router-dom";
import useWindowSize from "./functions/Utility.js"
import Loading from "./components/loading/Loading"
import Intro from "./pages/intro/Intro"
import Home from "./pages/home/Home.js";
import AppContextProvider from "./context/AppContext.js";
import { get } from './api';

function App() {
  const { width } = useWindowSize();
  // async function fetchData() {
  //   try {
  //     const data = await get('posts');
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  
  return (
    <>
      {width < 500 ? (
        <AppContextProvider>
          <Routes>
            <Route path='' index element={<Intro />}/>
            <Route path='/home' element={<Home />}/>
          </Routes>
        </AppContextProvider>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
