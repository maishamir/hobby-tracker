import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Knitting from "./pages/Knitting";
import Coding from "./pages/Coding";
import Art from "./pages/Art";
import Crochet from "./pages/Crochet";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knitting" element={<Knitting />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/art" element={<Art />} />
          <Route path="/crochet" element={<Crochet />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
