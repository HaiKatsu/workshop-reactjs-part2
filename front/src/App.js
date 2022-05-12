import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  <BrowserRouter>
    <Route exact path="/" component={Home}/>
  </BrowserRouter>
  return (
    <div>
        Hello react
        <h1><Home></Home></h1>
        <h1><About></About></h1>
    </div>);
}

export default App;
