import { Route, Routes } from "react-router-dom";
import useWindowSize from "./functions/Utility.js"
import Loading from "./components/loading/Loading"
import Intro from "./pages/intro/Intro"
import Home from "./pages/home/Home.js";
import AppContextProvider from "./context/AppContext.js";

function App() {
  const { width } = useWindowSize();
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
