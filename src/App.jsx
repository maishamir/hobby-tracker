
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coding from "./pages/Coding/Coding";
import Art from "./pages/Art";
import FibreArts from "./pages/FibreArts/FibreArts";

import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fibreArts" element={<FibreArts />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/art" element={<Art />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
