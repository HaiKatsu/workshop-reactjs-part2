import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;