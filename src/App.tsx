import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PeachScore from "./pages/peachscore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peachscore" element={<PeachScore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
