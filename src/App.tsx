import { Route, Routes } from "react-router-dom";
import useWindowSize from "./functions/Utility.js"
import Loading from "./components/loading/Loading"
import Intro from "./pages/intro/Intro"
import Home from "./pages/home/Home.js";
import AppContextProvider from "./context/AppContext.js";
import Detail_Item from "./pages/detail-Item/Detail_Item.js";
import Order from "./pages/order/Order.js";

function App() {
  const { width } = useWindowSize();
  return (
    <>
      {width < 700 ? (
        <AppContextProvider>
          <Routes>
            <Route path='' index element={<Intro />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/detail-Item' element={<Detail_Item />}/>
            <Route path='/order' element={<Order />}/>
          </Routes>
        </AppContextProvider>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
