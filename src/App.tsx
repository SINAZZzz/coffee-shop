import Loading from "./components/loading/Loading"
import Intro from "./pages/intro/Intro"
import useWindowSize from "./util/Utility.jsx";

function App() {
  const { width } = useWindowSize();
  return (
    <>
      {width < 500 ? (
       <Intro />
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
