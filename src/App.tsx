import { Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading"
import Intro from "./pages/intro/Intro"
import useWindowSize from "./util/Utility.jsx";
import Home from "./pages/home/Home.js";

function App() {
  const { width } = useWindowSize();
  return (
    <>
      {width < 500 ? (
        <Routes>
          <Route path='' index element={<Intro />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
