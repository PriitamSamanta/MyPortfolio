import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  return (
    <BrowserRouter>
      <BackgroundParticles />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
